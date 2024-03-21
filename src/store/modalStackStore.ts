import { atom } from "recoil";

export type ButtonDirection = "vertical" | "horizontal" | undefined;
export interface ModalState {
  title?: string;
  buttonDirection?: ButtonDirection;
  isOpen?: boolean;
  element?: JSX.Element | null;
  handleConfirm?: (...any: any) => any;
  data?: any;
}

const modalStackStore = atom<ModalState[]>({
  key: "modalStackStore",
  default: [],
});

export default modalStackStore;
