import { useState } from 'react';
import Axios from 'axios';

const useCheckout = () => {
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
    setErrors();
    Axios.post('http://localhost:8001/api/reservations', {
      id: Math.floor(Math.random() * 1000),
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
    }).then((res) => {
      console.log(res.data);
    });
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useCheckout;
