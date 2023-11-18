export const useSessionStorage = () => {
  const getSessionStorage = () => {
    return sessionStorage.getItem("Software Developer") === "michaelportfolio";
  };

  const saveSessionStorage = () => {
    sessionStorage.setItem("Software Developer", "michaelportfolio");
  };

  return {
    getSessionStorage,
    saveSessionStorage,
  };
};
