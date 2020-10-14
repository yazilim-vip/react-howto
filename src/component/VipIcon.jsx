import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VipIcon = (props) => (
  <div className={`d-inline-block yvip-icon ${props.iconCode} ${props.className}`} >
      <FontAwesomeIcon icon={["fab", props.iconCode]} className="mr-3" />
  </div>
);

export default VipIcon;