import { axiosWithAuth } from "../utils/axiosWithAuth";

export const SET_CHILD_ACTION = "SET_CHILD_ACTION";
export const SET_IMMUNIZATION_ACTION = "SET_IMMUNIZATION_ACTION";
export const SET_USER_ACTION = "SET_USER_ACTION";

export const loginAction = (props, credentials) => dispatch => {
  let userId;
  axiosWithAuth()
    .post(`/auth/login/${props.user}`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      userId = res.data.user.id;

      dispatch({ type: SET_USER_ACTION, payload: userId });
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR LOGIN: ", err));
};

export const getImmunizations = (childArr, history, user) => dispatch => {
  childArr.map((child, index) => {
    axiosWithAuth()
      .get(`/child/${child.id}/immunization`)
      .then(res => {
        dispatch({
          type: SET_IMMUNIZATION_ACTION,
          payload: { immuneObj: res.data, index: index }
        });
        history.push(`/${user}-home`);
      })
      .catch(err => console.log("ERROR IMMUNIZATION REQ: ", err));
  });
};

export const getChildrenAction = (userId, props) => dispatch => {
  if (props.user === "parents") {
    axiosWithAuth()
      .get(`/parent/${userId}/children`)
      .then(res => {
        dispatch({ type: SET_CHILD_ACTION, payload: res.data });
        getImmunizations(res.data, props.history, "patient")(dispatch);
      })
      .catch(err => console.log("ERROR CHILD REQ: ", err));
  } else {
    axiosWithAuth()
      .get(`/provider/${userId}/children`)
      .then(res => {
        dispatch({ type: SET_CHILD_ACTION, payload: res.data });
        getImmunizations(res.data, props.history, "doctor")(dispatch);
      })
      .catch(err => console.log("ERROR CHILD REQ: ", err));
  }
};

export const addChildAction = (parentId, childObj, props) => dispatch => {
  let parent_id = localStorage.getItem("userId");
  axiosWithAuth()
    .post(`/parent/${parent_id}/children`, childObj)
    .then(res => {
      getChildrenAction(parentId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};

export const updateChildAction = (vacId, vacObj, props, userId) => dispatch => {
  axiosWithAuth()
    .put(`/child/immunization/${vacId}`, vacObj)
    .then(res => {
      console.log("Success Put: ", res);
      getChildrenAction(userId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
};

export const addImmunizationUpdate = (values, childId, providerId, props) => dispatch => {
  axiosWithAuth()
    .post(`/child/${childId}/immunization/${providerId}`, values)
    .then(res => {
      console.log("Success Post: ", res);
      getChildrenAction(providerId, props)(dispatch);
    })
    .catch(err => console.log("ERROR: ", err));
}
