import { useState } from "react";

/**
 *
 * @param {an object of input fields} initialValues
 * @returns
 */
const useFormInput = (initialValues) => {
  const [input, setInput] = useState(initialValues);

  // handle input change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // reset form
  const handleResetForm = () => {
    setInput(initialValues);
  };

  return { input, setInput, handleInputChange, handleResetForm };
};

export default useFormInput;
