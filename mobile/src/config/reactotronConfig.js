import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '192.168.57.1',
  })
    .useReacNative()
    .use(reactotronRedux)
    .use(reactotronSaga)
    .connect();

  tron.clear();

  console.tron = tron;
}
