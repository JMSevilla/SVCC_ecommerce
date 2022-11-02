import React from "react";
import { Button } from "@mui/material";

import { IButton } from "../../core/componentInterfaces";

const SystemButton: React.FunctionComponent<IButton> = (props) => {
  const { buttonName, handleClick, variant, style, color } = props;

  return (
    <>
      <Button
        variant={variant}
        style={style}
        onClick={handleClick}
        color={color}
      >
        {buttonName}
      </Button>
    </>
  );
};

export default SystemButton;
