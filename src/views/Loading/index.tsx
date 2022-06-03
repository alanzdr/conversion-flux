/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';

import { useQuestions } from 'hooks/questions';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import api from 'services/api';

const Loading: React.FC = () => {
  const { exitData } = useQuestions();
  const [response, setResponse] = useState(false);
  const [continueLink, setContinueLink] = useState('');

  const styles = useStyles({
    visible: !!exitData,
    response,
  });

  useEffect(() => {
    if (!exitData) return;

    api.post('/save', exitData)
        .then(({ data }) => {
          if (data.error) {
            console.error(data.error);
            return;
          }
          window.location.href = data.next;
          setContinueLink(data.next);
          setResponse(true);
        })
        .catch((error) => {
          console.error(error);
        });
  }, [exitData]);

  const handleWithMainMessage = useCallback(
      () => {
        if (!exitData) return;
        const { type } = exitData;
        if (type === 'content') {
          return 'O download da sua proposta inicia em instantes.';
        } else {
          return 'Seu atendimento será iniciado no WhatsApp.';
        }
      },
      [exitData],
  );

  const handleWithSubMessage = useCallback(
      () => {
        if (!exitData) return '';
        const { type } = exitData;
        if (type === 'content') {
          return `Se o download não começar, <a href="${continueLink}">clique aqui para tentar novamente.</a>`;
        } else {
          return `Caso não tenha iniciado, <a href="${continueLink}">clique aqui para tentar novamente.</a>`;
        }
      },
      [exitData, continueLink],
  );

  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <Typography variant="h2">Aguarde...</Typography>
        <div className="spinner"></div>
      </div>
      <div className={styles.content}>
        <h2>{handleWithMainMessage()}</h2>
        <h3
          dangerouslySetInnerHTML={{ __html: handleWithSubMessage() }}
        />
      </div>
    </div>
  );
};

export default Loading;
