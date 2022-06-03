import React from 'react';
import { Button, Icon } from '@material-ui/core';

type Size = 'small' | 'medium' | 'large';

interface Props {
  text: string
  disabled?: boolean,
  next?: boolean
  back?: boolean
  onClick(): void,
  size?: Size,
}

const NextButton : React.FC<Props> = ({
  text,
  onClick,
  disabled = false,
  next = false,
  back = false,
  size = 'large',
} : Props) => (
  <Button
    variant={back ? 'outlined' : 'contained'}
    color="primary"
    disabled={disabled}
    onClick={onClick}
    size={size}
    endIcon={next ? <Icon>arrow_forward</Icon> : null}
    startIcon={back ? <Icon>arrow_back</Icon> : null}
  >
    {text}
  </Button>
);

export default NextButton;
