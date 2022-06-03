import React from 'react';

import { LayoutProps } from './types';

import Radio from './Radio';
import RadioRange from './RadioRange';
import Search from './Search';
import TextField from './Textfield';

const Layouts : React.FC<LayoutProps> = ({
  question,
  value,
  onChange,
  onValidate,
  onConfirm,
}: LayoutProps) => {
  switch (question.type) {
    case 'radio': {
      return (
        <Radio
          question={question}
          value={value}
          onChange={onChange}
          onValidate={onValidate}
          onConfirm={onConfirm}
        />
      );
    }
    case 'radio-range': {
      return (
        <RadioRange
          question={question}
          value={value}
          onChange={onChange}
          onValidate={onValidate}
          onConfirm={onConfirm}
        />
      );
    }
    case 'textfield': {
      return (
        <TextField
          question={question}
          value={value}
          onChange={onChange}
          onValidate={onValidate}
          onConfirm={onConfirm}
        />
      );
    }
    case 'search': {
      return (
        <Search
          question={question}
          value={value}
          onChange={onChange}
          onValidate={onValidate}
          onConfirm={onConfirm}
        />
      );
    }
    default: {
      return null;
    }
  }
};

export default Layouts;
