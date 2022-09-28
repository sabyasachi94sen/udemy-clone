import create from "zustand";

// TODO: Write docs

type ModalKey =
  | "addActivity"
  | "createSuperAdmin"
  | "updateSuperAdmin"
  | "deleteSuperAdmin";

export interface ModalState<TStoredData = unknown> {
  isModalOpen: boolean;
  currModalKey: ModalKey | null;
  onModalOpen: (key: ModalKey, data?: TStoredData) => void;
  onModalClose: () => void;
  selectedData?: TStoredData;
}

export const useModal = create<ModalState<unknown>>()((set) => ({
  isModalOpen: false,
  currModalKey: null,
  selectedData: null,
  onModalOpen: (key, data) => {
    set({ currModalKey: key, isModalOpen: true, selectedData: data });
  },
  onModalClose: () => {
    set({ currModalKey: null, isModalOpen: false, selectedData: null });
  },
}));
