import React from "react";

const InputService = (props) => {
  const {
    classColumn,
    classItem,
    icon,
    classSvg,
    ariaHidden,
    tittleTool,
    tittleDescription,
  } = props;
  return (
    <div className={classColumn}>
      <div className={classItem}>
        <span className={icon}>
          <i className={classSvg} aria-hidden={ariaHidden} />
        </span>
        <h6> {tittleTool} </h6>
        <p>
        <p>
          {" "}
          {tittleDescription} <br /> <br />{" "}
        </p>
        </p>
      </div>
    </div>
  );
};

export default InputService;
