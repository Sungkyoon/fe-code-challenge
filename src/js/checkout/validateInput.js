export default function validateInput(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter a valid email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(errors.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!values.phone) {
    errors.phone = 'Please enter a valid phone number.';
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(errors.phone)
  ) {
    errors.phone = 'Please enter a valid phone number.';
  }

  return errors;
}
