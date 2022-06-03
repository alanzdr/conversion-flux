import React from 'react';

import Theme from './theme';
import Questions from './questions';

interface Props {
  children: React.ReactNode;
}

const Contexts: React.FC<Props> = ({ children }) => (
  <Theme>
    <Questions>
      {children}
    </Questions>
  </Theme>
);

export default Contexts;
