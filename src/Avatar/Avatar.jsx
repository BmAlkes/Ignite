import React from "react";
import "./styles.css";

const Avatar = ({ hasBorder = true, src }) => {
  return (
    <img
      className={hasBorder ? "AvatarWithBorder" : "styles.Avatar"}
      src={src}
    />
  );
};

export default Avatar;
