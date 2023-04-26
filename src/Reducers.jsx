const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORIGINAL_DATA":
      return {
        ...state,
        originalData: action.payload,
        temporaryData: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "DIS_SET_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_CHECK_UNCHECK_FOR_UNREAD":
      return {
        ...state,
        temporaryData: action.payload,
      };
    case "SET_DELETE":
      return {
        ...state,
        temporaryData: action.payload,
      };
    case "CHANGEING":
      return {
        ...state,
        temporaryData: action.payload,
      };

    // ------------------------------

    default:
      return state;
  }
};
export default ProductReducer;
