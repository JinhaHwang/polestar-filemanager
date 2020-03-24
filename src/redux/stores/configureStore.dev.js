import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(initialState) {
    // const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware()

    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                /* logger, */

                promise,
                reduxThunk,
                sagaMiddleware,
            ),
        ),
    )
    if (module.hot) {
        module.hot.accept('../reducers/rootReducer', () => {
            import('../reducers/rootReducer').then(
                ({ default: newRootReducer }) => {
                    store.replaceReducer(newRootReducer)
                },
            )
        })
    }

    // sagaMiddleware.run(rootSaga)
    return store
}
