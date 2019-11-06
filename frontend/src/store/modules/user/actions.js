export function addUserRequest(user) {
  return {
    type: '@user/ADD_REQUEST',
    user,
  };
}

export function addUserSuccess(user) {
  return {
    type: '@user/ADD_SUCCESS',
    user,
  };
}
