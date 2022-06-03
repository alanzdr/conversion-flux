import { makeStyles } from '@material-ui/core/styles';

interface Props {
  visible: boolean
}

export const useStyles = makeStyles({
  container: ({ visible } : Props) => ({
    width: '720px',
    textAlign: 'center',
    transition: 'opacity .5s',
    opacity: visible ? 1 : 0,
    pointerEvents: visible ? 'auto' : 'none',
    maxWidth: '90%',
  }),
  text: {
    marginTop: '40px',
    fontWeight: 300,
  },
  button: {
    marginTop: '40px',
  },
  logo: ({ visible } : Props) => ({
    'position': 'absolute',
    'bottom': 40,
    'width': '100%',
    'display': 'flex',
    'justifyContent': 'center',
    'opacity': visible ? 1 : 0,
    'pointerEvents': visible ? 'auto' : 'none',
    'alignItems': 'center',
    '& img': {
      height: 38,
      width: 'auto',
      objectFit: 'cover',
    },
  }),
});
