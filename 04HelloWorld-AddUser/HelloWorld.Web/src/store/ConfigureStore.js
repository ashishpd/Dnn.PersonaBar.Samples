import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers/RootReducer";
import DevTools from "../containers/DevTools";

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware,
                reduxImmutableStateInvariant()),    // TODO: apply only for development          
            DevTools.instrument()
        )
    );
    return store;
}
