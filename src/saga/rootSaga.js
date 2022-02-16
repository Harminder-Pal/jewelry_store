import {all} from 'redux-saga/effects'
import { fetchapi} from './userSaga'
export default function* rootSaga(){
    yield all([fetchapi()])
}

