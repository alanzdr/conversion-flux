import React, { useMemo } from 'react';
import {
  Typography,
  TextField,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { getResponse } from 'utils/question';
import { useStyles } from '../styles';
import { LayoutProps } from '../types';

const SearchLayout: React.FC<LayoutProps> = ({
  question,
  onChange,
  value,
} : LayoutProps) => {
  const responses = useMemo(() => {
    const capitalize = (word: string) => {
      if (word.length <= 1) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return getResponse<string[]>(question)
        .map((r) =>
          r.split(' ').map(capitalize).join(' '),
        );
  }, [question]);
  const style = useStyles({
    length: responses.length,
  });

  const handleWithChange = (inputValue: string | null) => {
    onChange(inputValue || '');
  };

  return (
    <>
      <Typography
        className={style.title}
        variant="h3"
      >
        {question.title}
      </Typography>
      <div className={style.TextFieldContent}>
        <Autocomplete
          options={responses}
          value={value}
          onChange={(ev, inputValue) => handleWithChange(inputValue)}
          renderInput={(params) => (
            <TextField
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...params}
              className={style.TextField}
              label="Resposta"
              variant="outlined"
            />
          )}
        />
      </div>
    </>
  );
};

export default SearchLayout;
