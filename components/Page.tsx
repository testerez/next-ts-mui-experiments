import { withStyles } from 'material-ui/styles';


const Page = ({ children, classes }: any) => (
  <div className={classes.root}>
    <style jsx global>{`
      body { 
        padding: 0;
        margin: 0;
      }
    `}</style>  
    {children}
  </div>
);

export default withStyles({
  root: {
    maxWidth: '450px',
    margin: '0 auto',
  },
  '@media (min-width: 450px)': {
    root: {
      padding: '20px',
    }
  },
  '@media (min-width: 800px)': {
    root: {
      padding: '40px',
    }
  },
})(Page);
