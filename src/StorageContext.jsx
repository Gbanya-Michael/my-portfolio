import { useContext, createContext, useState } from "react";
import { useSessionStorage } from "./components/useSessionStorage";
const StorageContext = createContext({
  isAllowed: false,
  setIsAllowed: () => {},
});

export const useStorage = () => useContext(StorageContext);

const { getSessionStorage } = useSessionStorage();

const StorageProvider = ({ children }) => {
  const [isAllowed, setIsAllowed] = useState(getSessionStorage());

  return (
    <StorageContext.Provider value={{ isAllowed, setIsAllowed }}>
      {children}
    </StorageContext.Provider>
  );
};

export default StorageProvider;
