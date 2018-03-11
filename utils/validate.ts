export const required = (message = 'Field is required') => (value?: string) =>
  !(value || '').trim() ? message : undefined;

export const regex = (message: string, regexp: RegExp) => (value?: string) =>
  value && !regexp.test(value) ? message : undefined;

export const email = regex('Invalid email', /^(.+)@(.+){2,}\.(.+){2,}$/);

export const phone = regex('Invalid phone', /^[0-9- ()x.]+$/);

export const url = regex('Invalid url', /^(ftp|http|https):\/\/[^ "]+$/);
