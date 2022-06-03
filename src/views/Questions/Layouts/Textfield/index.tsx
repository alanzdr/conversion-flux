import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import {
  Typography,
  TextField,
} from '@material-ui/core';

import { validateEmail, validateCNPJ } from 'utils/string';

import { useStyles } from '../styles';
import { LayoutProps, Validation } from '../types';

const TextFieldLayout: React.FC<LayoutProps> = ({
  question,
  onChange,
  value,
  onValidate,
  onConfirm,
} : LayoutProps) => {
  const style = useStyles({
    length: 0,
  });
  const [error, setError] = useState('');

  const handleWithChange = useCallback(
      (ev: React.ChangeEvent<HTMLInputElement>) => {
        const responseValue = ev.target.value;
        onChange(responseValue);
      },
      [],
  );

  const handleWithKeyPress = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
          onConfirm();
        }
      },
      [onConfirm],
  );

  const validade : Validation = useCallback(
      (next) => {
        const { variant } = question;
        if (variant) {
          if (variant === 'email' && !validateEmail(value)) {
            setError('Email Invalido');
            return;
          }
          if (variant === 'cnpj' && !validateCNPJ(value)) {
            setError('CNPJ Invalido');
            return;
          }
        }
        setError('');
        next();
      },
      [question, value],
  );

  useEffect(() => {
    onValidate(validade);
  }, [onValidate, validade]);

  return (
    <>
      <Typography
        className={style.title}
        variant="h3"
      >
        {question.title}
      </Typography>
      <div className={style.TextFieldContent}>
        <TextField
          label="Sua resposta:"
          value={value}
          onChange={handleWithChange}
          fullWidth
          type={question.variant || 'text'}
          error={!!error}
          helperText={error}
          color="primary"
          variant="filled"
          onKeyDown={handleWithKeyPress}
        />
      </div>
    </>
  );
};

export default TextFieldLayout;
