const initialState = {
  token: []
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SEND_FROM_FATHER":
      return {
        token: [...state.token, action.data]
      };
    default:
      return state;
  }
}
