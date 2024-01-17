import { useState } from "react";
import useCheckboxGroup from "../../hook/useCheckboxGroup";

// import {
//   checkedValues,
//   setCheckedValues,
//   handleCheckedboxChange,
// } from "../../hook/useCheckboxGroup";

const food = ["alo", "potol", "lao", "kumra", "begun", "data", "morich"];

const Checkbox2 = () => {
  //   const [checkedVal, setCheckedVal] = useState([]);

  //   const handleCheckboxChange = (value) => {
  //     if (checkedVal.includes(value)) {
  //       setCheckedVal(checkedVal.filter((item) => item !== value));
  //     } else {
  //       setCheckedVal([...checkedVal, value]);
  //     }
  //   };

  const { checkedValues, handleCheckedboxChange } = useCheckboxGroup();

  return (
    <>
      <div className="conatainer my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                {food.map((item, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        value={item}
                        checked={checkedValues.includes(item)}
                        onChange={() => handleCheckedboxChange(item)}
                      />

                      <label className="ms-2">{item}</label>
                    </div>
                  );
                })}
                <p className="mt-3">
                  <strong>Checked Values:</strong> {checkedValues.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkbox2;
