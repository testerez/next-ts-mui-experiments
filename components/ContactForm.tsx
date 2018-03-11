import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

interface Props {
  contact?: Contact;
}

const ContactForm = ({ classes }: Props & StyleProps) => (
  <form>
    <Card>
      <CardContent>
        <TextField id="name" label="Name" fullWidth margin="normal" />
        <TextField id="name" label="Name" fullWidth margin="normal" />
        <TextField id="name" label="Name" fullWidth margin="normal" />
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant="raised" color="primary" component="submit">
          Save
        </Button>
      </CardActions>
    </Card>
  </form>
);

export default (withStyles({
  actions: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
})(ContactForm) as any) as React.SFC<Props>;
