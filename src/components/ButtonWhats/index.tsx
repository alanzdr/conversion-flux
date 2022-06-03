import React from 'react';
import { Button } from '@material-ui/core';
import { FaWhatsapp } from 'react-icons/fa';

interface Props {
  text: string
  onClick(): void
}

const NextButton : React.FC<Props> = ({
  text,
  onClick,
} : Props) => (
  <Button
    variant="contained"
    color="primary"
    style={{
      background: '#42C452',
    }}
    onClick={onClick}
    size="large"
    endIcon={<FaWhatsapp />}
  >
    {text}
  </Button>
);

export default NextButton;
