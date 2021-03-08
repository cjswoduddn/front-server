import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  // ... 다른 리듀서들
  form: formReducer     // <---- 'form' 리듀서에 할당
};
const rootReducer = combineReducers(reducers);
export default rootReducer;