const initialState = {
    users: [],
};
  export const SET_USERS = "SET_USERS";
  export let userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SET_USERS: {
        state.users = payload;
        return { ...state };
      }
      default:
        return state;
    }
};