import {createLogger} from 'redux-logger'

import {createStore,applyMiddleware} from 'redux'

import CreateSagaMiddleware from 'redux-saga'

 import rootReducer from './reducers/reducers'

import rootSaga from './saga/rootSaga'



const loggerMiddleware=createLogger()

const sagaMiddleware=CreateSagaMiddleware()



export const store=createStore(

    rootReducer,

    applyMiddleware(

        sagaMiddleware,loggerMiddleware

    )

)



sagaMiddleware.run(rootSaga)