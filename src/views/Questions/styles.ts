import { makeStyles } from '@material-ui/core/styles';

interface Props {
  enabled: boolean
}

export const useStyles = makeStyles(() => ({
  container: ({ enabled }: Props) => ({
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: enabled ? 'auto' : 'none',
  }),
}));
