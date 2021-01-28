import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(()=>({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {   
    height: 200,
    width: '100%',

  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
export default useStyles