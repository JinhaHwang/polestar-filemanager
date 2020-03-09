import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxThunk from 'redux-thunk'
import rootReducer from 'redux/reducers/rootReducer'
// import rootReducer from '../reducers'
// import rootSaga from '../sagas'
import promise from 'redux-promise-middleware'

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
