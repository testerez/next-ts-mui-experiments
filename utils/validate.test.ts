import * as validate from './validate';

describe('validate', () => {
  it('validates required', () => {
    expect(validate.required('message')('')).toEqual('message');
    expect(validate.required('message')(' ')).toEqual('message');
    expect(validate.required('message')('ok')).toEqual(undefined);
  });
  it('validates email', () => {
    expect(validate.email('')).toEqual(undefined);
    expect(validate.email('super@cool.com')).toEqual(undefined);
    expect(validate.email(' ')).toEqual('Invalid email');
    expect(validate.email('not so good')).toEqual('Invalid email');
  });
  it('validates phone', () => {
    expect(validate.phone('')).toEqual(undefined);
    expect(validate.phone('519-3249327')).toEqual(undefined);
    expect(validate.phone('221.230.9733 x318')).toEqual(undefined);
    expect(validate.phone('not so good')).toEqual('Invalid phone');
  });
  it('validates url', () => {
    expect(validate.url('')).toEqual(undefined);
    expect(validate.url('http://test.test')).toEqual(undefined);
    expect(validate.url('not so good')).toEqual('Invalid url');
  });
});
