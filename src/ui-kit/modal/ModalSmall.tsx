import React, { useEffect, FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./modalsmall.module.scss";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/ModalOverlay";
import { CloseIcon } from "../icons";

interface IModalProps {
  closeModal: () => void;
  children: ReactNode;
  title: string;
}

const ESC_KEYCODE = 27;
const modalSelector = document.querySelector("#react-modals") as HTMLElement;

const ModalSmall: FC<IModalProps> = ({ children, closeModal, title }) => {
  const closeByEsc = (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", closeByEsc);
    return () => {
      window.removeEventListener("keydown", closeByEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal_small}>
        <div className={styles.modal_small__head}>
          <p
            className={cn(
              "text",
              "text_type_main-large",
              "m-0",
              styles.modal__title,
            )}
          >
            {title}
          </p>
          <CloseIcon
            className={styles.modal__closeIcon}
            type="interface-secondary"
            onClick={closeModal}
          />
        </div>
        {children}
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    modalSelector,
  );
};

export default ModalSmall;
