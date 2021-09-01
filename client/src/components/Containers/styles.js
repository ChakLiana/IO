import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 30,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    padding: theme.spacing(4),
  },
  pages: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    margin: theme.spacing(1),
    marginBottom: 10,
    borderRadius: 20,
  },
  typography: {
    fontFamily: [
      '"Segoe UI Symbol"',
    ].join(','),
},
}));