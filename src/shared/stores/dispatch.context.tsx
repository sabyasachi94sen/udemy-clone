import { createContext, useReducer, useContext } from "react";

type Action =
  | { type: "SET_INPUT_VALUE"; payload: number }
  | { type: "SET_INPUT_VALUE_TO_100" };

type Dispatch = (action: Action) => void;
type State = typeof initialState;
type InputProviderProps = { children: React.ReactNode };

// interface InputProviderProps {
//   children: React.ReactNode;
// }

const initialState = {
  inputValue: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};

const InputStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function InputValueProvider({ children }: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputStateContext.Provider value={{ state, dispatch }}>
      {children}
    </InputStateContext.Provider>
  );
}

function useInput() {
  const context = useContext(InputStateContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
}

export { useInput, InputValueProvider };
