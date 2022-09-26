import create from "zustand";

// TODO: Write docs

type ModalKey = "addActivity";

interface ModalState {
  isModalOpen: boolean;
  currModalKey: ModalKey | null;
  onModalOpen: (key: ModalKey, data?: unknown) => void;
  onModalClose: () => void;
  selectedData?: unknown;
}

export const useModal = create<ModalState>((set) => ({
  isModalOpen: false,
  currModalKey: null,
  selectedData: null,
  onModalOpen: (key: ModalKey, data?: unknown) => {
    set({ currModalKey: key, isModalOpen: true, selectedData: data });
  },
  onModalClose: () => {
    set({ currModalKey: null, isModalOpen: false, selectedData: null });
  },
}));
