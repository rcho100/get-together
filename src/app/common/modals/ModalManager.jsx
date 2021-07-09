/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../features/sandbox/TestModal';

export default function ModalManager() {
  const modalCollection = {
    TestModal,
  };
  const currentModal = useSelector((state) => state.modalReducer);
  let renderedModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const CurrentModalComponent = modalCollection[modalType];
    renderedModal = <CurrentModalComponent {...modalProps} />;
  }

  return <span>{renderedModal}</span>;
}
