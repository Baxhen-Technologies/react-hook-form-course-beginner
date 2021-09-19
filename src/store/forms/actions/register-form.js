import { ActionTypes } from "../../action-types";

const formName = "registerForm";

export const updateRegisterForm = (data) => {
  return {
    type: ActionTypes.updateForm,
    payload: { data, formName },
  };
};

export const clearRegisterForm = () => {
  return {
    type: ActionTypes.clearForm,
    payload: { formName },
  };
};
