import { createContext, useState, FC, ReactNode } from "react";

type stateType = {
  text: string;
  type: string;
};

type AlertContextType = {
  state: stateType;
  setAlert: ({ text, type }: stateType) => void;
};

type AlertProviderProps = {
  children?: ReactNode;
};

export const AlertContext = createContext({} as AlertContextType);

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = ({ text, type }: stateType) => {
    setText(text);
    setType(type);
  };

  const value = {
    state: { text, type },
    setAlert,
  };

  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};
