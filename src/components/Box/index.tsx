import React, { PropsWithChildren } from 'react';
import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

interface Props {
  position: number,
  index: number,
  finished: boolean
  children?: React.ReactNode
}

const Box: React.FC<Props> = ({
  position,
  finished,
  children,
  index,
} : PropsWithChildren<Props>) => {
  const style = useStyles();

  const getBoxClassName = () => {
    if (finished || position === -1) {
      if (index === 0 && position === -1) {
        return 'center';
      }
      if (index === position) {
        return 'center';
      }
      if (index < position) {
        return 'left';
      }
      if (index > position) {
        return 'right';
      }
    }
    if (index === position) {
      return 'center appear';
    }
    if (index < position) {
      if (index === (position - 1)) {
        return 'left appear';
      }
      return 'left';
    }
    if (index > position) {
      if (index === (position + 1)) {
        return 'right appear';
      }
      return 'right';
    }
    return '';
  };

  const handleWithQuestionNumber = () => {
    let indexText = '';

    if (index < 9) {
      indexText = `0${index + 1}`;
    } else {
      indexText = `${index + 1}`;
    }

    return `pergunta ${indexText}`;
  };

  return (
    <div className={`${style.container} ${getBoxClassName()}`}>
      <Typography className={style.questionNumber}>
        {handleWithQuestionNumber()}
      </Typography>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Box;
