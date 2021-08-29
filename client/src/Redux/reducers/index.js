import { combineReducers } from 'redux';

import posts from './posts';
import auth from './AuthR';

export const reducers = combineReducers({ posts, auth });
