import { useState } from "react";

const useCheckboxGroup = () => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckedboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // unchecked the checkbox and remove from the array
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      // check the checkbox and add to the array
      setCheckedValues([...checkedValues, value]);
    }
  };

  //   const handleCheckedboxChange = (value) => {
  //     setCheckedValues((prevValues) => {
  //       if (prevValues.includes(value)) {
  //         // unchecked the checkbox and remove from the array
  //         return prevValues.filter((item) => item !== value);
  //       } else {
  //         // check the checkbox and add to the array
  //         return [...checkedValues, value];
  //       }
  //     });
  //   };

  return {
    checkedValues,
    setCheckedValues,
    handleCheckedboxChange,
  };
};

export default useCheckboxGroup;
