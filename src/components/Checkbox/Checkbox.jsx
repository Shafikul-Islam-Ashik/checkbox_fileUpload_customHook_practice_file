import { useState } from "react";

const food = ["alo", "potol", "lao", "kumra", "folcopy", "zinga"];

const Checkbox = () => {
  const [checkedVal, setCheckedVal] = useState([]);

  // hadleCheckedValueChanged
  const hadleCheckedValueChanged = (item) => {
    const oldVal = [...checkedVal];

    if (checkedVal.includes(item)) {
      oldVal.splice(checkedVal.indexOf(item), 1);
    } else {
      oldVal.push(item);
    }

    setCheckedVal(oldVal);
  };
  console.log(checkedVal);

  //    // hadleCheckedValueChanged
  //    const hadleCheckedValueChanged = (item) => {
  //     const oldVal = [...checkedVal];

  //     if (oldVal.includes(item)) {
  //       oldVal.splice(oldVal.indexOf(item), 1);
  //     } else {
  //       oldVal.push(item);
  //     }

  //     setCheckedVal(oldVal);
  //   };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              {food.map((item, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value={item}
                      onChange={() => hadleCheckedValueChanged(item)}
                    />{" "}
                    {item}
                  </label>
                  <br />
                </div>
              ))}
              {/* {food.map((item, index) => {
                return (
                  <>
                    <label key={index}>
                      <input type="checkbox" name="" id="" /> alo
                    </label>
                    <br />
                  </>
                );
              })} */}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
