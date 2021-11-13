export const pageReducer = (state, action) => {
  switch (action.type) {
    case 'EXTRA_PAGE':
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};
