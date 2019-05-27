export const SUBMIT_FORM_START = "SUBMIT_FORM_START";
export const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
export const SUBMIT_FORM_FAIL = "SUBMIT_FORM_FAIL";

export const submitForm = ({ payload }) => ({
  type: SUBMIT_FORM_START,
  payload
});

export const submitFormFail = ({ payload }) => ({
  type: SUBMIT_FORM_FAIL,
  payload
});

export const submitFormSuccess = ({ payload }) => ({
  type: SUBMIT_FORM_SUCCESS,
  payload
});
