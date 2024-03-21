import { useRecoilState } from "recoil";
import modalStackStore, { ModalState } from "../store/modalStackStore";

export function useModalStack() {
  const [modalStack, setModalStack] = useRecoilState(modalStackStore);

  const openModal = (modalConfig: ModalState) => {
    setModalStack((prevStack) => {
      return [...prevStack, { ...modalConfig, isOpen: true }];
    });
  };

  const closeModal = () => {
    setModalStack((prevStack) => {
      return prevStack.slice(0, -1);
    });
  };

  const setDataToPreviousModal = (data: any) => {
    setModalStack((prevStack) => {
      const newStack = [...prevStack];
      const currentModalIndex = newStack.length - 2;
      if (currentModalIndex >= 0) {
        const currentModal = newStack[currentModalIndex];
        newStack[currentModalIndex] = { ...currentModal, data };
      }
      return newStack;
    });
  };

  const currentModal = modalStack[modalStack.length - 1];

  return { openModal, closeModal, currentModal, setDataToPreviousModal };
}
