import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    maxWidth: 650,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  box: {
    'width': '90%',
    'maxWidth': 460,
    'margin': '40px 0',
    'display': 'flex',
    'flexDirection': 'row',
    'background': '#fff',
    'borderRadius': 20,
    'overflow': 'hidden',
    'boxShadow': '0px 3px 6px 0px rgba(0,0,0,0.2)',
    '& img': {
      width: '37%',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    '& .text': {
      'width': '60%',
      'marginLeft': 'auto',
      'display': 'flex',
      'flexDirection': 'column',
      'textAlign': 'left',
      'padding': '24px 0',
      '& p': {
        color: theme.palette.text.secondary,
        fontSize: 12,
      },
      '& h2': {
        color: theme.palette.secondary.main,
        fontSize: 32,
        lineHeight: 1.5,
        marginTop: 8,
      },
      '& h3': {
        color: theme.palette.secondary.main,
        fontSize: 16,
        lineHeight: 1.5,
      },
      '& h4': {
        color: theme.palette.text.primary,
        marginTop: 20,
        fontSize: 16,
        lineHeight: 1.5,
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
    [theme.breakpoints.down('md')]: {
      margin: '24px 0',
    },
  },
  buttons: {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'marginTop': 32,
    '& button': {
      margin: '0 8px',
    },
    [theme.breakpoints.down('md')]: {
      'flexDirection': 'column-reverse',
      '& button': {
        margin: '8px 0',
      },
    },
  },
}));
