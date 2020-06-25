import React from "react";

const InputPorfolio = (props) => {
  const {
    classColumn,
    classItem,
    srcImage,
    altImage,
    imageItem,
    positionText,
    messageTitle,
    tittleTool,
    tittleDescription,
    classIcon,
    iconLink,
    classSvg,
    ariaHidden,
  } = props;
  return (
    <div className={classColumn}>
      <div className={classItem}>
        <img src={srcImage} alt={altImage} />
        <div className={imageItem}>
          <div className={positionText}>
            <h6 className={messageTitle}>
              {tittleTool}
              <br />
              <br />
              {tittleDescription}
            </h6>
            <div className={classIcon}>
              <span className={iconLink}>
                <a href={srcImage} title={tittleDescription}>
                  <i className={classSvg} aria-hidden={ariaHidden} />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <input
            img
            src=""
            alt=""
            className={ImagenItem}
            className={positionText}
            className={messageTitle}
            className={icons}
            className={iconLink}
            href=""
            title={}
            className={idItem}
            aria-hidden={true}
          /> */}
      </div>
    </div>
  );
};

export default InputPorfolio;
