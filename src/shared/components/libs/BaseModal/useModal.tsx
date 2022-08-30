import { createContext, ReactNode, useContext, useMemo, useState } from "react";

// TODO: Write docs

type ModalContextValue = {
  isModalOpen: boolean;
  currModalKey: string;
  onModalOpen: (key: string, data?: unknown) => void;
  onModalClose: () => void;
  selectedData?: unknown;
};

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

const ModalProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // Open or close boolean state of modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Curr Modal key: So that a component can open multiple modal diffrentiate by key
  const [currModalKey, setCurrModalKey] = useState("");

  // When opening a modal, we can pass the data,
  // that data can be then accesed with in the opened modal
  const [selectedData, setSelectedData] = useState<unknown | undefined>();

  const onModalOpen = (key: string, data: unknown) => {
    setCurrModalKey(key);

    if (data) {
      setSelectedData(data);
    }
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setCurrModalKey(null);
    setSelectedData(null);
    setIsModalOpen(false);
  };

  const ModalState = useMemo(
    () => ({
      isModalOpen,
      currModalKey,
      selectedData,
      onModalOpen,
      onModalClose,
    }),
    [isModalOpen, currModalKey, selectedData] // Only update state if, these two values change
  );

  return (
    <ModalContext.Provider value={ModalState}>{children}</ModalContext.Provider>
  );
};

const useModal = (): ModalContextValue => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(`useModal must be used within a ModalProvider`);
  }

  return context;
};

export { ModalProvider, useModal };
