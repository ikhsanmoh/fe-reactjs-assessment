import { createStore } from 'redux';
import locationReducer from './locationReducer';

export const store = createStore(locationReducer)