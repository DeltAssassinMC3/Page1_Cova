import React from "react";

const Input = (props) => { 
  const {classColumn, classGroup, idForm, inputType, name, placeHolder, requiredInput} = props 
    return ( 
    <div className={classColumn}>
      <div className={classGroup}>
        <input
          id={idForm}
          type={inputType}
          name={name}
          placeholder={placeHolder}
          required={requiredInput}
        />
      </div>
    </div>
  );
};

export default Input;
