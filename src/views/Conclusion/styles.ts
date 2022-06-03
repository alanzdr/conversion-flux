import { makeStyles } from '@material-ui/core/styles';

interface Props {
  visible: boolean
}

export const useStyles = makeStyles({
  container: ({ visible } : Props) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: visible ? 1 : 0,
    transition: 'opacity .5s ease',
    pointerEvents: visible ? 'auto' : 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }),
});
