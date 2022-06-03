/* eslint-disable react/prop-types */
import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from 'components/Box';
import { useQuestions } from 'hooks/questions';
import { getResultValue } from 'utils/question';
import Button from 'components/Button';
import { Flow } from 'data/data.json';

import { Validation } from '../Layouts/types';
import Layouts from '../Layouts';

// import { Container } from './styles';
const useStyles = makeStyles({
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

interface Props {
  flow: Flow,
  index: number
}

const Single: React.FC<Props> = ({ index, flow }) => {
  const style = useStyles();
  const [value, setValue] = useState<string>('');

  const [validation, setValidation] = useState<Validation>(() => {
    const defaultValidation : Validation = (next) => {
      next();
    };
    return defaultValidation;
  });

  const onChangeValidation = useCallback(
      (newValidation: Validation) => {
        setValidation(() => newValidation);
      }, [],
  );

  const {
    respond,
    getAnswer,
    getQuestion,
    moveRight,
    moveLeft,
    position,
    finish,
    result,
  } = useQuestions();
  const question = getQuestion(flow.question);

  const handleWithResponse = useCallback(
      (responseValue: string) => {
        setValue(responseValue);
        respond(flow.key, responseValue);
      },
      [flow.key],
  );

  useEffect(() => {
    const responseValue = getAnswer(flow.key);
    if (responseValue) {
      setValue(responseValue);
    }
  }, [flow.key, getAnswer]);

  const handleWithNextValidation = useCallback(
      () => {
        const QuestionResult = getResultValue(flow, value);
        if (QuestionResult.type === 'finished') {
          validation(() => {
            finish(QuestionResult.next);
          });
        } else {
          validation(() => {
            moveRight();
          });
        }
      },
      [flow, value, validation, moveRight, finish],
  );

  const nextButtonLayout = useCallback(
      () => {
        const QuestionResult = getResultValue(flow, value);
        if (QuestionResult.type === 'finished') {
          return (
            <Button
              onClick={handleWithNextValidation}
              text="Finalizar"
              disabled={!value}
            />
          );
        }
        return (
          <Button
            onClick={handleWithNextValidation}
            text="Próxima"
            disabled={!value}
            next
          />
        );
      },
      [flow, value, handleWithNextValidation],
  );

  if (!question) return null;

  return (
    <>
      <Box
        position={position}
        index={index}
        finished={!!result}
      >
        <Layouts
          question={question}
          value={value}
          onChange={handleWithResponse}
          onValidate={onChangeValidation}
          onConfirm={handleWithNextValidation}
        />
        <div className={style.buttons}>
          <Button
            onClick={moveLeft}
            text="Voltar"
            back
          />
          {nextButtonLayout()}
        </div>
      </Box>
    </>
  );
};

export default Single;
