
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    'position': 'absolute',
    'borderRadius': 20,
    'padding': 48,
    'background': '#fff',
    'transition': 'left .5s ease, top .5s ease, transform .5s ease',
    'boxShadow': '0px 3px 6px 0px rgba(0,0,0,0.10);',
    'width': 'fit-content',
    'maxWidth': 750,
    'minWidth': 400,
    'overflow': 'hidden',
    '&.center': {
      'left': '50%',
      'top': '-50%',
      'transform': 'translate(-50%, -50%)',
      '&.appear': {
        top: '50%',
      },
    },
    '&.left': {
      left: '-100%',
      top: '50%',
      transform: 'translate(0, -50%)',
      [theme.breakpoints.up('md')]: {
        '&.appear': {
          left: '0',
          transform: 'translate(calc(-100% + 48px), -50%)',
        },
      },
    },
    '&.right': {
      left: '150%',
      top: '50%',
      transform: 'translate(0, -50%)',
      [theme.breakpoints.up('md')]: {
        '&.appear': {
          left: '100%',
          transform: 'translate(-48px, -50%)',
        },
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      minWidth: '90%',
      padding: '32px 24px',
    },
  },
  questionNumber: {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 32,
    letterSpacing: 3,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    [theme.breakpoints.down('md')]: {
      marginBottom: 16,
    },
  },
}));
