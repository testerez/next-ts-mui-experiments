// @ts-ignore
import { Field } from 'react-form';
import TextField from 'material-ui/TextField';

// <TextField id="name" label="Name" fullWidth margin="normal" />

interface Props {
  field: string;
  label: string;
  validate?(value: string): string | undefined | false | null;
  required?: boolean;
}

const FormTextField = ({ field, label, validate, required }: Props) => (
  <Field {...{ field, validate }}>
    {({ setValue, value, error }: any) => (
      <TextField
        {...{ label, value, required }}
        error={!!error}
        helperText={error}
        fullWidth
        margin="normal"
        onChange={e => setValue(e.target.value)}
      />
    )}
  </Field>
);

export default FormTextField;
