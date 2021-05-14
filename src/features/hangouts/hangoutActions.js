/* eslint-disable import/prefer-default-export */
import { CREATE_HANGOUT, UPDATE_HANGOUT, DELETE_HANGOUT } from './hangoutConstants';

export function createHangout(hangout) {
  return {
    type: CREATE_HANGOUT,
    hangout,
  };
}
export function updateHangout(hangout) {
  return {
    type: UPDATE_HANGOUT,
    hangout,
  };
}
export function deleteHangout(hangoutID) {
  return {
    type: DELETE_HANGOUT,
    hangoutID,
  };
}
