const initialState = {
    users: [],
};
  export const SET_USERS = "SET_USERS";

  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USERS:
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  };