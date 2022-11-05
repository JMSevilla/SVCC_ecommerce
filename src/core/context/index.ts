import React from "react";

export interface ICartHolder {
  id?: Number;
  name?: string;
  detail?: string;
  price?: string;
  image?: string;
}

export interface ICartMapping {
  id?: Number;
  name?: string;
  detail?: string;
  price?: string;
  image?: string;
  category?: string;
}

export interface IFieldContextType {
  cart?: any;
  setCart?: any;
  cartHolder?: ICartHolder[] | any;
  setCartHolder?: any;
  cartMapping?: ICartMapping[];
  setCartMapping?: any;
}
