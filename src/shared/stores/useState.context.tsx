import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type AppState = {
  name: string;
};

type AppContextValue = {
  authUser: AppState;
  setAuthUser: Dispatch<SetStateAction<AppState>>;
};

const AuthUserStateContext = createContext<AppContextValue | undefined>(
  undefined
);

type AuthUserProviderProps = {
  children: React.ReactNode;
};

const AuthUserProvider = ({ children }: AuthUserProviderProps) => {
  const [authUser, setAuthUser] = useState<AppState | undefined>({
    name: "test",
  });

  const authUserState = useMemo<AppContextValue>(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser, setAuthUser]
  );

  dele

  return (
    // <AuthUserStateContext.Provider value={{ authUser, setAuthUser }}>
    <AuthUserStateContext.Provider value={authUserState}>
      {children}
    </AuthUserStateContext.Provider>
  );
};

const useAuthUser = (): AppContextValue => {
  const context = useContext(AuthUserStateContext);

  if (context === undefined) {
    throw new Error(`useAuthUser must be used within a AuthUserProvider`);
  }

  return context;
};

export { AuthUserProvider, useAuthUser };
