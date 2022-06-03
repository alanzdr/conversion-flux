import React from 'react';
import { Typography } from '@material-ui/core';
import Image from 'next/image';

import Button from 'components/Button';
import Data from 'data/data.json';
import { useQuestions } from 'hooks/questions';
import { useStyles } from './styles';

const Welcome: React.FC = () => {
  const { credetials } = Data;
  const { position, moveRight } = useQuestions();
  const style = useStyles({ visible: position === -1 });
  return (
    <>
      <div className={style.container}>
        <Typography variant="h1">Bem-vindo!</Typography>
        <Typography className={style.text}>
          Para entregar a melhor proposta para você,
          precisamos analisar o cenário da sua empresa. Para isso,
          precisamos que você responda algumas perguntas!
        </Typography>
        <div className={style.button}>
          <Button
            text="Vamos lá!"
            onClick={moveRight}
            next
          />
        </div>
      </div>
      <div className={style.logo}>
        <Image
          src={credetials.logo.src}
          alt={credetials.logo.alt}
          width={credetials.logo.width}
          height={credetials.logo.height}
        />
      </div>
    </>
  );
};

export default Welcome;
