import { makeStyles } from '@material-ui/core/styles';

interface Props {
  visible: boolean,
  response: boolean
}

export const useStyles = makeStyles((theme) => ({
  container: ({ visible }: Props) => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: visible ? 1 : 0,
    transition: 'opacity .5s ease',
    pointerEvents: visible ? 'auto' : 'none',
  }),
  loading: ({ response }: Props) => ({
    'width': '100%',
    'height': '100%',
    'position': 'absolute',
    'opacity': response ? 0 : 1,
    'transition': 'opacity .5s ease',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    '& h2': {
      margin: 0,
      fontSize: 32,
      lineHeight: 1.2,
      color: '#5A5A5C',
    },
    '& .spinner': {
      'position': 'relative',
      'height': 48,
      'width': 48,
      'marginTop': 24,
      'marginBottom': 40,
      '&::before': {
        content: '""',
        boxSizing: 'border-box',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '5px solid transparent',
        borderTopColor: theme.palette.primary.main,
        animation: 'spinner .8s linear infinite',
      },
    },
  }),
  content: ({ response }: Props) => ({
    'width': '90%',
    'height': '100%',
    'position': 'relative',
    'margin': '0 auto',
    'opacity': response ? 1 : 0,
    'transition': 'opacity .5s ease',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'center',
    'textAlign': 'center',
    '& h2': {
      margin: 0,
      fontSize: 32,
      lineHeight: 1.2,
      color: '#5A5A5C',
    },
    '& h3': {
      'margin': 0,
      'marginTop': 24,
      'fontSize': 16,
      'lineHeight': 1.2,
      'color': '#5A5A5C',
      '& a': {
        'color': theme.palette.primary.main,
        'textDecoration': 'none',
        'transition': 'color .3s',

        '&:hover': {
          color: theme.palette.primary.dark,
        },
      },
    },
    [theme.breakpoints.down('md')]: {
      '& h2': {
        fontSize: 32,
        lineHeight: 1.33,
      },
      '& h3': {
        fontSize: 18,
        lineHeight: 1.5,
      },
    },
  }),
}));
