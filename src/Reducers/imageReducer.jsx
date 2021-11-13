export const imageReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return { ...state, images: state.images.concat(action.images) };
    case 'FETCH_IMAGES':
      return { ...state, fetching: action.fetching };
    default:
      return state;
  }
};
