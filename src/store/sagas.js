import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreator';

function* getInitList(){
    try {
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('todolist获取失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;