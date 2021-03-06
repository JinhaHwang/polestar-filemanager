import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer'
// import rootReducer from '../reducers'
// import rootSaga from '../sagas'

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(promise, reduxThunk, sagaMiddleware),
    )

    // sagaMiddleware.run(rootSaga)
    return store
}
