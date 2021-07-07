import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.testReducer);
  return (
    <>
      <h1>Testing</h1>
      <Button
        name="decrement"
        onClick={() => {
          dispatch(openModal({ modalType: 'TestModal', modalProps: data }));
        }}
        content="Open Modal"
        color="teal"
      />
    </>
  );
}
