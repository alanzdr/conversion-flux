import React, { useState, useEffect } from 'react';

import { useQuestions } from 'hooks/questions';
import Data, { Conclusion as ConclusionType, ExitType } from 'data/data.json';
import { getConclusionResult } from 'utils/conclusion';
import useDataFactory from 'hooks/useDataFactory';

import useParams from 'hooks/useParams';
import ProposalLayout from './Layouts/Proposal';
import { useStyles } from './styles';

const Conclusion: React.FC = () => {
  const {
    result,
    flow,
    responses,
    questions,
    exitData,
    exit,
  } = useQuestions();
  const { conclusions, credetials } = Data;
  const { params } = useParams(credetials);
  const [conclusion, setConclusion] = useState<ConclusionType>();

  const styles = useStyles({ visible: !!result && !exitData });

  useEffect(() => {
    if (result) {
      const thisConclusion = getConclusionResult(conclusions, result);
      if (thisConclusion) {
        setConclusion(thisConclusion);
      }
    }
  }, [result, conclusions]);

  if (!conclusion) return null;

  const handleWithExit = (type: ExitType) => {
    if (!params) return;

    const { data } = useDataFactory({
      params,
      flow,
      responses,
      questions,
      type,
      routeKey: conclusion.key,
    });

    exit(data);
  };

  return (
    <div className={styles.container}>
      <ProposalLayout
        body={conclusion.layout}
        onExit={handleWithExit}
      />
    </div>
  );
};

export default Conclusion;
