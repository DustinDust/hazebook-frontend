import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  propNames,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  closeBtnPresent: boolean;
  closeOnOverlayClick: boolean;
}

export const ModalWrapper = (props: ModalProps) => {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        closeOnOverlayClick={props.closeOnOverlayClick}
      >
        <ModalOverlay />
        <ModalContent maxW={250}>
          <ModalHeader>{props.header}</ModalHeader>
          {props.closeBtnPresent ? <ModalCloseButton /> : null}
          <ModalBody>{props.children}</ModalBody>
          <ModalFooter>{props.footer}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
