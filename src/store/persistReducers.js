import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Gleek',
      storage: AsyncStorage,
      whitelist: ['core'],
    },
    reducers,
  );

  return persistedReducer;
};
