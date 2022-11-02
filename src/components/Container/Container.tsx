import React, { CSSProperties } from "react";
import { Container } from "@mui/material";

import { ContainerProps } from "../../core/componentInterfaces";

const SystemContainer: React.FunctionComponent<ContainerProps> = ({
  children,
  stylish,
  appClassName,
  maxWidth,
  fixed,
}) => {
  return (
    <Container
      fixed={fixed}
      maxWidth={maxWidth}
      style={stylish}
      className={appClassName}
    >
      {children}
    </Container>
  );
};

export default SystemContainer;
