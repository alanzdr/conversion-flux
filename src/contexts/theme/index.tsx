import React, { useMemo } from 'react';
import { ThemeProvider as MaterialTheme } from '@material-ui/core/styles';

import { createTheme } from 'styles/theme';
import Data from 'data/data.json';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider : React.FC<Props> = ({ children }) => {
  const { theme: configs } = Data;
  const theme = useMemo(() => createTheme(configs), [configs]);
  return (
    <MaterialTheme theme={theme}>
      {children}
    </MaterialTheme>
  );
};

export default ThemeProvider;
