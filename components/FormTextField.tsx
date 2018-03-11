// @ts-ignore
import { Field } from 'react-form';
import TextField from 'material-ui/TextField';

// <TextField id="name" label="Name" fullWidth margin="normal" />

interface Props {
  field: string;
  label: string;
}

const FormTextField = ({ field, label }: Props) => (
  <Field field={field}>
    {({ setValue, value }: any) => (
      <TextField
        {...{ label, value }}
        fullWidth
        margin="normal"
        onChange={e => setValue(e.target.value)}
      />
    )}
  </Field>
);

export default FormTextField;
