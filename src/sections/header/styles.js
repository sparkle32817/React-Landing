import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    top: 0,
    width: '100%'
  },
  logoContainer: {
    padding: '0',
    marginTop: '0.5rem'
  },
  logo: {
    width: 80,
    height: 35,
    maxHeight: 35,
    padding: 0
  },
  navmenu: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .navbar-start': {
        margin: 'auto !important'
      },
    },
  },
  navitem: {
    borderBottom: '1px solid transparent',
    color: '#fff',
    fontSize: 16,
    '&:hover': {
      backgroundColor: 'transparent !important',
      textDecoration: 'none',
    }
  }
}));
