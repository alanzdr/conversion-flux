import React from 'react';
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';

import { getResponse } from 'utils/question';
import { useStyles } from '../styles';
import { LayoutProps } from '../types';

const RadioLayout: React.FC<LayoutProps> = ({
  question,
  onChange,
  value,
} : LayoutProps) => {
  const responses = getResponse<string[]>(question);
  const style = useStyles({
    length: responses.length,
  });

  const handleWithChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ev.target.value);
  };

  const optionsClass = () => {
    if (responses.length > 4) {
      return 'big';
    }
    if (responses.length <= 2) {
      return 'small';
    }
    return 'normal';
  };

  return (
    <>
      <Typography
        className={`${style.title} ${optionsClass()}`}
        variant="h3"
      >
        {question.title}
      </Typography>
      <div className={style.content}>
        <RadioGroup
          className={`${style.radioGroup} ${optionsClass()}`}
          onChange={handleWithChange}
          value={value}
        >
          {responses.map((res, index) => (
            <FormControlLabel
              key={res}
              label={res}
              value={String(index)}
              control={<Radio className="radio" />}
            />
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export default RadioLayout;
