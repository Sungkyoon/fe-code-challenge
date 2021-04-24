import { useState, useEffect } from 'react';

const useCheckout = (validateInput) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    emailError: '',
    phoneError: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInput(values));
  };

  console.log(values);

  return { handleChange, values, handleSubmit, errors };
};

export default useCheckout;
