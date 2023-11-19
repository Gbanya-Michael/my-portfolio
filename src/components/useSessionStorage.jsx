const STORAGE_KEY = "Software Developer";
const STORAGE_NAME = "michaelportfolio";

export const useSessionStorage = () => {
  const getSessionStorage = () => {
    return sessionStorage.getItem(STORAGE_KEY) === STORAGE_NAME;
  };

  const saveSessionStorage = () => {
    sessionStorage.setItem(STORAGE_KEY, STORAGE_NAME);
  };

  return {
    getSessionStorage,
    saveSessionStorage,
  };
};
