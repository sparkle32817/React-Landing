import { makeStyles } from '@material-ui/core/styles';

const primaryColor = '#007bff';
const secondaryColor = '#3D3D3D';

const cardStyle = makeStyles({
  card: {
    marginBottom: 20,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '0px solid transparent',
    borderRadius: 5
  },
  cardBody: {
    padding: 20,
    flex: '1 1 auto'
  }
});

const dialogStyle = makeStyles({
  root: {
    padding: '20px 30px'
  },
  warningIcon: {
    color: '#EEB85A',
    fontSize: '100px !important'
  },
  textHeader: {
    width: '100%',
    color: '#514C4C',
    padding: 10
  },
  textBody: {
    width: '100%',
    color: '#605858'
  }
});

const tableStyle = makeStyles({
  root: {
    width: '100%',
  },
  container: {
  },
  iconSpan: {
    padding: '0 2px'
  },
  viewIcon: {
    color: '#17BF4F',
    fontSize: '16px !important'
  },
  editIcon: {
    color: '#277FCC',
    fontSize: '16px !important'
  },
  deleteIcon: {
    color: '#E38484',
    fontSize: '16px !important'
  }
});

export {
  cardStyle,
  dialogStyle,
  tableStyle
}