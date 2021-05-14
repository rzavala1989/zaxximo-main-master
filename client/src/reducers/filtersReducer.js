import { SORT_BY_COMPLETE, SORT_BY_DATE } from '../actions/types';

const filtersReducerDefaultState = {
  sortBy: 'date',
};
export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SORT_BY_COMPLETE:
      return {
        ...state,
        sortBy: 'attention',
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
      };
    default:
      return state;
  }
};
