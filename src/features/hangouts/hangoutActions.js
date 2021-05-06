/* eslint-disable import/prefer-default-export */
import { CREATE_HANGOUT, UPDATE_HANGOUT, DELETE_HANGOUT } from './hangoutConstants';

export function createHangout(hangout) {
  return {
    type: CREATE_HANGOUT,
    payload: hangout,
  };
}
export function updateHangout(hangout) {
  return {
    type: UPDATE_HANGOUT,
    payload: hangout,
  };
}
export function deleteHangout(hangoutID) {
  return {
    type: DELETE_HANGOUT,
    payload: hangoutID,
  };
}
