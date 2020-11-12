import { makeStyles } from '@material-ui/core/styles';

const footerStyle = makeStyles({
  mail: {
    fontSize: 20,
  },
  whatsapp: {
    fontSize: 20,
  },
  link: {
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  socialIcon: {
    fontSize: 24,
    padding: 15
  }
});

export {
  footerStyle
}