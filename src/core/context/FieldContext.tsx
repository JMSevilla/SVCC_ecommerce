import React, { createContext, useState } from "react";
import { IFieldContextType, ICartHolder, ICartMapping } from ".";

import { toast } from "react-toastify";

export const Context = createContext<IFieldContextType | null>(null);

interface ContextProps {
  children: React.ReactNode;
}

const FieldContext: React.FunctionComponent<ContextProps> = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [cartHolder, setCartHolder] = useState<ICartHolder[]>([]);
  const [cartMapping, setCartMapping] = useState<ICartMapping[]>([]);

  return (
    <Context.Provider
      value={{
        cart,
        setCart,
        cartHolder,
        setCartHolder,
        cartMapping,
        setCartMapping,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default FieldContext;
