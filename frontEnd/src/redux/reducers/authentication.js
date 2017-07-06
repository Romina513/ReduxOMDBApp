export function authentication (state={}, action) {
  switch(action.type) {
    case 'REGISTER_USER':
      return Object.assign({}, state, {isPostingToServer: true});
    case 'USER_IS_REGISTERED':
      return Object.assign({}, state, {isPostingToServer: false});
    case 'USER_FAILED_TO_REGISTER':
      return Object.assign({}, state, {
        isPostingToServer: false,
        register: false
      });
    case 'FAILED_POST':
      return Object.assign({}, state, {
        isPostingToServer: false,
        error: action.err
      });
    default:
      return state;
  }
  return state;
}
