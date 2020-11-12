import { makeStyles } from '@material-ui/core/styles';

const bannerStyle = makeStyles(theme => ({
  root: {
    top: -61,
    [theme.breakpoints.down('sm')]: {
      top: -78
    },
  },
  bgImg: {
    backgroundImage: `url('img/banner/1.jpg')`
  },
}));

const aboutStyle = makeStyles({
  root: {
  },
  subtitle: {
    padding: '20px !important'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: '20px 0'
  },
  img: {
    borderRadius: 5,
    width: '100%',
    height: 250,
    marginBottom: 10
  }
});

const visionStyle = makeStyles((theme)=> ({
  root: {
  },
  subtitle: {
    padding: '20px !important'
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

const missionStyle = makeStyles({
  root: {
  },
  subtitle: {
    padding: '20px !important'
  }
});

const taskStyle = makeStyles({
  root: {
  },
  subtitle: {
    fontSize: 16,
    paddingTop: 5
  },
  style: {
    listStyle: 'circle'
  }
});

const methodStyle = makeStyles({
  root: {
  },
  subtitle: {
    padding: '20px !important'
  }
});

export {
  bannerStyle,
  aboutStyle,
  visionStyle,
  missionStyle,
  taskStyle,
  methodStyle
}