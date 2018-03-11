import { withStyles } from 'material-ui/styles';
import withRoot from 'core/withRoot';
import compose from 'compose-function';

const Page = ({ children, classes }: any) => (
  <div className={classes.root}>{children}</div>
);

export default compose(
  withRoot,
  withStyles({
    root: {
      maxWidth: '450px',
      margin: '0 auto',
    },
    '@media (min-width: 450px)': {
      root: {
        padding: '20px',
      },
    },
    '@media (min-width: 800px)': {
      root: {
        padding: '40px',
      },
    },
  }),
)(Page);
