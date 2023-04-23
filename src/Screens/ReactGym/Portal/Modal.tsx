import { PropsWithChildren } from "react";
import { ModalContainer, Overlay, PortalButton } from "./styled-Portal";

type ModalProps = PropsWithChildren<{
  isModalOpen: boolean;
  onClose: () => void;
}>;

export const Modal = (props: ModalProps) => {
  const { isModalOpen, onClose, children } = props;

  return (
    <>
      <Overlay onClick={onClose} isModalOpen={isModalOpen} />
      <ModalContainer isModalOpen={isModalOpen}>
        <PortalButton onClick={onClose}>Close</PortalButton>
        <PortalButton onClick={() => console.log("test click 2")}>
          Test Click 2
        </PortalButton>
        <PortalButton onClick={() => console.log("test click 3")}>
          Test Click 3
        </PortalButton>
        {children}
      </ModalContainer>
    </>
  );
};
