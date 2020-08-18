import { all } from 'redux-saga/effects';
import watchDelayAdd from './watchSaga/watchDelayAdd';

export default function* rootSaga() {
  // 下面的四个 Generator 函数会一次执行，不会阻塞执行
  yield all([watchDelayAdd()]);
}
