export const required = (value) => (!value || !value.length) ? "Required" : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const phone = value =>
  value && value.length !== 9
    ? 'Only spaniard numbers!'
    : undefined