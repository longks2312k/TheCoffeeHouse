import React, { Component } from "react";
//Redux
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import allReducers from "./src/reducers";

import AppNavigation from "./src/appNavigation/router"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

  const persistedReducer = persistReducer(persistConfig, allReducers)

  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);

  export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigation />
          </PersistGate>
        </Provider>
      );
    }
}
