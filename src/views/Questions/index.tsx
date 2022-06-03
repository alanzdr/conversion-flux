import React from 'react';

import { useQuestions } from 'hooks/questions';
import SingleQuestion from './Single';

import { useStyles } from './styles';

const Questions: React.FC = () => {
  const { flow, position, result } = useQuestions();
  const enabled = position >= 0 && !result;
  const styles = useStyles({ enabled });
  return (
    <div className={styles.container}>
      {flow.map((flowItem, index) => (
        <React.Fragment key={flowItem.key}>
          <SingleQuestion flow={flowItem} index={index} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Questions;
