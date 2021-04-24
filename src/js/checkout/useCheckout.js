import { useState } from 'react';
import { buySpot } from './checkout-reducer';
import { v4 as uuidv4 } from 'uuid';

const useCheckout = (validateInput) => {
  const [values, setValues] = useState({
    id: 0,
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
