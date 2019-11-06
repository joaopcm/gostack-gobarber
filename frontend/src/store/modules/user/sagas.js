import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
// import * as navigationService from '../../../services/navigation';

import { addUserSuccess } from './actions';

function* addUser({ user }) {
  // ...

  const response = yield call(api.post, '/login', ...user);

  yield put(addUserSuccess(response.data));

  // navigationService.navigate('Dashboard')
}

export default all([takeLatest('@user/ADD_REQUEST', addUser)]);
