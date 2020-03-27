const initState = {
  client: { username: "", email: "", SSN: "" }
};
const rootReducer = (state = initState, action) => {
  if (action.type == "setUserName") {
    state.client.username = action.userName;
    return {
      ...state
    };
  }
  if (action.type == "setEmail") {
    state.client.email = action.email;
    return {
      ...state
    };
  }
  if (action.type == "setSSN") {
    state.client.SSN = action.SSN;
    return {
      ...state
    };
  }
  return state;
};

export default rootReducer;
