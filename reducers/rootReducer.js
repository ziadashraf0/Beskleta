const initState = {
  client: { username: "aas" }
};
const rootReducer = (state = initState, action) => {
  if (action.type == "setUserName") {
    state.client.username = action.userName;

    //alert(state.client.username);
    return {
      ...state
    };
    //client[0]["username"] = state.username;
  }
  // if (action.type == "Delete") {
  //   alert("hammo");

  //   let newPosts = state.posts.filter(post => {
  //     return action.id != post.id;
  //   });

  //   return {
  //     ...state
  //   };
  // }
  return state;
};

export default rootReducer;
