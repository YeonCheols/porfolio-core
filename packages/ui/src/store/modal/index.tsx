import { create } from "zustand";
import { BasicModalStore } from "../../types/modal";

const initialBasicModalStore: BasicModalStore = {
  modalOpen: false,
  targetModalName: "",
  modalIsReloadData: false,
};
export const useBasicModalStore = create(() => ({
  ...initialBasicModalStore,
}));
