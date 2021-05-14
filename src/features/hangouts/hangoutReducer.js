import { sampleData } from '../../app/api/sampleData';
import { CREATE_HANGOUT, UPDATE_HANGOUT, DELETE_HANGOUT } from './hangoutConstants';

const initialState = {
  hangouts: sampleData,
};

export default function hangoutReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_HANGOUT:
      return {
        ...state,
        hangouts: [...state.hangouts, action.hangout],
      };
    case UPDATE_HANGOUT:
      return {
        ...state,
        hangouts: [
          ...state.hangouts.filter((hangout) => hangout.id !== action.hangout.id), action.hangout,
        ],
      };
    case DELETE_HANGOUT:
      return {
        ...state,
        hangouts: [...state.hangouts.filter((hangout) => hangout.id !== action.hangoutID)],
      };
    default:
      return state;
  }
}
