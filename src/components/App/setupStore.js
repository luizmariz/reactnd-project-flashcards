import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'; // It's a nice lib that persist Redux state with AsynStorage
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from '../../reducers';
import middleware from '../../middlewares';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);