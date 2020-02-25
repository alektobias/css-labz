import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import RootReducer from './modules/rootReducer';

const persistConfig = {
	key: 'YOUR_SECRET_KEY',
	storage,
	whitelist: [],
};

const store = createStore(persistReducer(persistConfig, RootReducer));

const persistor = persistStore(store);

export { store, persistor };
