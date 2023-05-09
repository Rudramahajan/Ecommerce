import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ProductsReducer from 'redux-thunk/redux/product/productsSlice'
import CartReducer from 'redux-thunk/redux/cart/CartSlice';
import ProfileReducer from 'redux-thunk/redux/profile/ProfileSlice';
import OrderReducer from 'redux-thunk/redux/order/orderSlice';
import authenticationReducer from 'redux-thunk/redux/authentication/authenticationSlice';

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const rootReducer = combineReducers({
    products: ProductsReducer,
    cart: CartReducer,
    profile: ProfileReducer,
    order: OrderReducer,
    authentication : authenticationReducer
})

const persistedStore = loadFromLocalStorage();
const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedStore
},);

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;

