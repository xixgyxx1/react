let initialState = {
  count: 0,
  id: "",
  password: ""
};

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password
    };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.payload.num };
  }

  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { ...state, count: state.count + 1 };
  //     default:
  //       return { ...state };
  //   }
  return { ...state };
}

export default reducer;
