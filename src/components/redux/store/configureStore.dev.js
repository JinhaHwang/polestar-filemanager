import { applyMiddleware, compose, createStore } from 'redux'
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import reduxThunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
// import rootSaga from '../sagas'

export default function configureStore(initialState) {
    // const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(/* logger, */ reduxThunk, sagaMiddleware),
        ),
    )
    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            import('../reducers/rootReducer').then(({ default: newRootReducer }) => {
                store.replaceReducer(newRootReducer)
            })
        })
    }

    // sagaMiddleware.run(rootSaga)
    return store
}
