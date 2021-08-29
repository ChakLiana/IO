import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 50,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    height:'60px',
    width:"90px",
    justifyContent: 'center',
    alignItems: 'center',
    margin: '7px 0',
    
  },
toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',

  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    marginLeft:'16rem',
    margin: theme.spacing(1),

  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1),

    
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft:'30rem',
    margin: theme.spacing(2),



  },
}));
