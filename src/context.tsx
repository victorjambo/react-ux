import { createContext, useContext } from "react";

interface IAppContext {
  // Add stuff
}

const AppContext = createContext<Partial<IAppContext>>({});

export const useAppContext = (): Partial<IAppContext> => useContext(AppContext);

const AppProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
