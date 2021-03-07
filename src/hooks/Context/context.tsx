import React, { createContext, useReducer } from "react";

import reducer from "./reducer";

const Context = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: {},
  dispatch: () => null,
});
const { Provider } = Context;

const ContextProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {});

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export { ContextProvider, Context };
