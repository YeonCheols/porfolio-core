import { create } from "zustand";
import { useBasicModalStore } from "../../store/modal";

export const useBasicModalFunctions = create(() => ({
  setModalOpen: (value: boolean) =>
    useBasicModalStore.setState({ modalOpen: value }),
  setTargetModalName: (value: string) =>
    useBasicModalStore.setState({ targetModalName: value }),
  setModalIsReloadData: (value: boolean) =>
    useBasicModalStore.setState({ modalIsReloadData: value }),
}));
