import React, { useCallback } from 'react';
import { Typography } from '@material-ui/core';
import Image from 'next/image';

import { RangeResponse } from 'data/data.json';
import { getResponse } from 'utils/question';
import { useStyles } from '../styles';
import { LayoutProps } from '../types';

const RadioRangeLayout: React.FC<LayoutProps> = ({
  onChange,
  question,
  value,
} : LayoutProps) => {
  const responses = getResponse<RangeResponse[]>(question);
  const style = useStyles({
    length: responses.length,
  });

  const handleWithChange = (responseIndex: string) => {
    onChange(responseIndex);
  };

  const handleWithItemLabel = (response: RangeResponse) => (
    <div className="label">
      {response.image && (
        <div className="image">
          <Image
            src={response.image}
            alt={response.text}
            width={144}
            height={98}
          />
        </div>
      )}
      <Typography
        variant="h2"
        className={response.image && 'with-image'}
      >
        {response.title}
      </Typography>
      <Typography>{response.text}</Typography>
    </div>
  );

  const radioButtonClass = useCallback(
      (index: number) => {
        let className = style.radioRangeButton;
        if (String(index) === value) {
          className += ' active';
        }
        return className;
      },
      [value],
  );


  return (
    <div className={style.radioRangeContent}>
      <Typography
        className={style.title}
        variant="h3"
      >
        {question.title}
      </Typography>
      <div>
        <div className={style.radioRangeContainer}>
          {responses.map((response, index) => (
            <button
              className={radioButtonClass(index)}
              key={response.text}
              onClick={() => handleWithChange(String(index))}
              type="button"
            >
              {handleWithItemLabel(response)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadioRangeLayout;
