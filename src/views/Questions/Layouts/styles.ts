import { makeStyles } from '@material-ui/core/styles';

interface Props {
  length?: number
}

export const useStyles = makeStyles((theme) => ({
  title: {
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      '&.big': {
        fontSize: 20,
      },
    },
  },
  content: {
    marginTop: 24,
  },
  radioGroup: {
    '&.small': {
      '& label .MuiFormControlLabel-label': {
        fontSize: 18,
      },
    },
    [theme.breakpoints.down('md')]: {
      '&.big': {
        '& label .MuiFormControlLabel-label': {
          fontSize: 14,
          lineHeight: 1.2,
        },
      },
      '& label': {
        marginBottom: 4,
      },
    },
  },
  TextFieldContent: {
    marginTop: 32,
    marginBottom: 16,
  },
  TextField: {
    width: 500,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  radioRangeContent: {
    width: 'min-content',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  radioRangeContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '580px',
    maxWidth: '100%',
    margin: '16px auto',
    [theme.breakpoints.down('md')]: {
      margin: '24px auto',
      width: '100%',
    },
  },
  radioRangeButton: ({ length }: Props) => ({
    'display': 'flex',
    'border': `1px solid ${theme.palette.text.secondary}`,
    'background': '#fff',
    'cursor': 'pointer',
    'transition': 'all .5s',
    'width': length ? `calc(100% / ${length})` : '100%',
    '&:first-child': {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    '&:last-child': {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    '& .label': {
      'display': 'flex',
      'flexDirection': 'column',
      'alignItems': 'center',
      'padding': 20,
      'width': '100%',
      '& .image': {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': 100,
        'marginBottom': 16,
        'borderRadius': 5,
        'overflow': 'hidden',
        'border': `1px solid ${theme.palette.text.secondary}`,
        'transition': 'border .5s ease',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      },
      '& h2': {
        'transition': 'color .5s',
        'color': theme.palette.text.secondary,
        '&.with-image': {
          fontSize: 24,
        },
      },
      '& p': {
        marginTop: 6,
        fontSize: 12,
        maxWidth: 150,
        display: 'flex',
        color: theme.palette.text.secondary,
        transition: 'color .5s',
      },
      [theme.breakpoints.down('md')]: {
        'padding': '16px 10px',
        '& h2': {
          fontSize: 24,
        },
        '& .image': {
          height: 60,
        },
      },
    },
    '&:hover': {
      'background': `${theme.palette.secondary.main}1A`,
      'border': `1px solid ${theme.palette.secondary.main}`,
      '& .label': {
        '& h2, & p': {
          color: theme.palette.secondary.main,
        },
        '& .image': {
          border: `1px solid ${theme.palette.secondary.main}`,
        },
      },
    },
    '&.active': {
      'background': theme.palette.secondary.main,
      'border': `1px solid ${theme.palette.secondary.main}`,
      '& .label': {
        '& h2, & p': {
          color: '#fff',
        },
        '& .image': {
          border: '1px solid #fff',
        },
      },
      '&:hover': {
        '& .label': {
          '& h2, & p': {
            color: '#fff',
          },
          '& .image': {
            border: '1px solid #fff',
          },
        },
      },
    },
  }),
}));
