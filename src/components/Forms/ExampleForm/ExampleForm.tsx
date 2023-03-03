// Import React and required components
import React, { useState } from 'react';
import './ExampleForm.scss';

// Define the form interface
interface IForm {
  email: string;
  password: string;
  confirmPassword: string;
}

// Define the register form component
const ExampleForm: React.FC = () => {
  // Initialize form state
  const [form, setForm] = useState<IForm>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  // Handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // Render the register form
  return (
    <div className='formWrapper'>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ExampleForm;
