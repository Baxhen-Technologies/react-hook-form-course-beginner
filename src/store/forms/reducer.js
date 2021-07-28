import { produce } from 'immer';
import { ActionTypes } from '../action-types';

const initialState = {
  registerForm: {},
};

export const form = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.updateForm: {
      const { formName, data } = action.payload;
      draft[formName] = {
        ...draft[formName],
        ...data,
      };
      break;
    }
    default:
      return draft;
  }
}, initialState);
