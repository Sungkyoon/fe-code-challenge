export default function validateInput(values) {
  const errors = {};
  const phoneNum = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!values.email) {
    errors.email = 'Please enter a valid email.';
  } else if (!email.test(values.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!values.phone) {
    errors.phone = 'Please enter a valid phone number.';
  } else if (!phoneNum.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
}
