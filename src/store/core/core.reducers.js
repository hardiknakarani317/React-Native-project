import {coreActions} from '../actionTypes';

const getInitialState = () => ({
  users: [],
});

export const core = (state = getInitialState(), action) => {
  switch (action.type) {
    case coreActions.FETCHED_USERS:
      return {
        users: action.data,
      };
    default:
      return state;
  }
};
