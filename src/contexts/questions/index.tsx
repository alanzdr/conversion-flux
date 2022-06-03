import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { flowFactory, getParamsResponse } from 'utils/question';
// import  } from 'contexts/data'
import Data, { Flow, Library, Question } from 'data/data.json';
import useParams from 'hooks/useParams';
import { FluxBody } from 'controllers/Response/types';

interface Context {
  questions: Question[],
  flow: Flow[]
  responses: Library,
  update: (responses: Library) => void,
  position: number,
  movePosition: (value: number) => void,
  result: string | null,
  exitData?: FluxBody
  exit: (values: FluxBody) => void
  setResult: (value: string) => void
}

interface Props {
  children: React.ReactNode
}

export const QuestionsContext = createContext({} as Context);

const QuestionsProvider: React.FC<Props> = ({ children }) => {
  const { questions, credetials, flows } = Data;
  const [flow, setFlow] = useState<Flow[]>([]);
  const [responses, setResponse] = useState<Library>({});
  const [position, setPosition] = useState(-1);
  const [exitData, setExitData] = useState<FluxBody>();
  const [result, setResult] = useState<string | null>(null);
  const { params } = useParams(credetials);

  const storageKey = useMemo(
      () => `flow-${credetials.name}-${credetials.version}`,
      [credetials],
  );

  const onSaveResponses = useCallback((values: Library) => {
    const valueString = JSON.stringify(values);
    localStorage.setItem(`${storageKey}-data`, valueString);
    setResponse(values);
  }, [storageKey]);

  const onUpdateFlow = useCallback((values: Library) => {
    setFlow(flowFactory(flows, values));
  }, [flows]);

  const onMovePosition = (value: number) => {
    setPosition(value);
    localStorage.setItem(`${storageKey}-position`, String(value));
  };

  // on Load Questions
  useEffect(() => {
    if (!params) return;

    const initValues = localStorage.getItem(`${storageKey}-data`);
    const paramsData = getParamsResponse(params, flows);

    if (initValues) {
      const jsonData = JSON.parse(initValues) as Library;
      const allData = {
        ...paramsData,
        ...jsonData,
      };
      setResponse(allData);
      onUpdateFlow(allData);
    } else {
      setResponse(paramsData);
      onUpdateFlow(paramsData);
      onSaveResponses(paramsData);
    }
  }, [onUpdateFlow, storageKey, flows, params]);

  // onLoadPosition
  useEffect(() => {
    const newPosition = localStorage.getItem(`${storageKey}-position`);
    if (newPosition) {
      setPosition(Number(newPosition));
    }
  }, [storageKey]);

  const update = useCallback(
      (values: Library) => {
        onSaveResponses(values);
        onUpdateFlow(values);
      },
      [],
  );

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        flow,
        responses,
        update,
        result,
        setResult,
        position,
        exitData,
        exit: setExitData,
        movePosition: onMovePosition,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
