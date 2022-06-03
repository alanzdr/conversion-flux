import { useContext, useCallback } from 'react';
import { QuestionsContext } from 'contexts/questions';
import { Library, Flow, Question } from 'data/data.json';
import { FluxBody } from 'controllers/Response/types';

interface QuestionHook {
  flow: Flow[],
  responses: Library,
  questions: Question[],
  getAnswer: (key: string) => string | null,
  getQuestion: (key: string) => Question | undefined
  respond: (key: string, value: string) => void,
  position: number,
  result: string | null,
  finish: (key: string) => void,
  moveLeft: () => void,
  moveRight: () => void,
  exitData?: FluxBody
  exit: (values: FluxBody) => void
}

export const useQuestions = () : QuestionHook => {
  const {
    position,
    movePosition,
    responses,
    update,
    result,
    setResult,
    questions,
    flow,
    exit,
    exitData,
  } = useContext(QuestionsContext);

  const getQuestion = useCallback(
      (key: string) => questions.find((question) => question.key === key),
      [questions],
  );

  const getAnswer = useCallback(
      (key: string) => {
        const response = responses[key];
        if (response) {
          return response;
        }
        return null;
      },
      [responses],
  );

  const respond = useCallback((key: string, value: string) => {
    const allResponse = Object.assign(responses);
    allResponse[key] = value;
    update(allResponse);
  }, [responses, update]);

  const canMoveRight = useCallback(() => {
    if ((position + 1) >= flow.length) {
      return false;
    }
    return true;
  }, [position, flow.length]);

  const canMoveLeft = useCallback(() => {
    if (position < 0) {
      return false;
    }
    return true;
  }, [position]);

  const moveRight = useCallback(() => {
    if (canMoveRight()) {
      movePosition(position + 1);
    }
  }, [position, canMoveRight, movePosition]);

  const moveLeft = useCallback(() => {
    if (canMoveLeft()) {
      movePosition(position - 1);
    }
  }, [position, canMoveLeft, movePosition]);

  const finish = useCallback(
      (key: string) => {
        setResult(key);
      },
      [setResult],
  );

  return {
    flow,
    responses,
    questions,
    getAnswer,
    getQuestion,
    respond,
    position,
    result,
    finish,
    moveLeft,
    moveRight,
    exitData,
    exit,
  };
};
