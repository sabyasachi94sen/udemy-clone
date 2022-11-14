import { unknown } from "zod";
import create from "zustand";

// TODO: Write docs

type ModalKey =
  | "addActivity"
  | "createSuperAdmin"
  | "updateSuperAdmin"
  | "deleteSuperAdmin"
  | "createAdmin"
  | "updateAdmin"
  | "deleteAdmin"
  | "createAccountManager"
  | "updateAccountManager"
  | "deleteAccountManager"
  | "createStudent"
  | "deleteStudent"
  | "updateStudent"
  | "viewStudent"
  | "deleteAepTracker"
  | "viewStatusTable"
  | "deleteAepStudentActivity"
  | "updateAepActivity"
  | "viewActionMap"
  | "createActivity"
  | "viewActivity"
  | "updateActivity"
  | "deleteActivity"
  | "createActionStep"
  | "updateActionStep"
  | "deleteActionStep"
  | "viewActivityDetails"
  | "viewRemark"



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


export const useStoreData = create()((set) => ({
  storedData: null,
  setStoredData: (data) => {
    set({ storedData: data });
  },
}));

export const useViewMap = create()((set) => ({
  viewMap: null,
  setViewMap: (data) => {
    set({ viewMap: data });
  },
}));





