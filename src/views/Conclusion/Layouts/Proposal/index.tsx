/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@material-ui/core';
import Image from 'next/image';

import ButtonWhats from 'components/ButtonWhats';
import Button from 'components/Button';

import { useStyles } from './styles';
import { ConclusionLayout, ExitType } from 'data/data.json';

interface Props {
  body: ConclusionLayout,
  onExit: (type: ExitType) => void
}

const Proposal: React.FC<Props> = ({ body, onExit } : Props) => {
  const styles = useStyles();
  const mobile = window.innerWidth < 1000;
  return (
    <div className={styles.container}>
      <Typography variant="h1">
        Sua proposta está pronta!
      </Typography>
      <div className={styles.box}>
        <Image
          src={require('assets/images/homem.png' )}
          alt={body.h4}
        />
        <div className="text">
          <Typography>Resumo da sua proposta:</Typography>
          <Typography variant="h2">Pontoweb</Typography>
          <Typography variant="h3">{body.h3}</Typography>
          <Typography variant="h4">{body.h4}</Typography>
        </div>
      </div>
      <Typography>
        {
          mobile ?
            'Com base nas suas repostas, montamos uma proposta ideal para o seu negócio.' :
            'Com base nas suas repostas acerca dos desafios e necessidades da sua rotina empresarial, montamos uma proposta ideal para o seu negócio.'
        }
        <br />
        <strong>Clique no botão abaixo para acessar.</strong>
      </Typography>
      <div className={styles.buttons}>
        <ButtonWhats
          text="Chame no Whatsapp"
          onClick={() => onExit('whats')}
        />
        <Button
          text="Visualizar proposta"
          onClick={() => onExit('content')}
          size="large"
          next
        />
      </div>
    </div>
  );
};

export default Proposal;
