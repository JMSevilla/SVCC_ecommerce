import React, { CSSProperties } from "react";

export interface IAppbar {
  title?: string | null;
}

export interface IButton {
  buttonName?: string | null;
  handleClick: () => void;
  style?: CSSProperties;
  variant?: any;
  color?: any;
}

export interface ContainerProps {
  children: any;
  stylish?: CSSProperties;
  appClassName?: string;
  maxWidth?: any;
  fixed?: any;
}
