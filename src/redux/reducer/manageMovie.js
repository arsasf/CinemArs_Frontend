const initialState = {
  data: [],
  pagination: {},
  isLoading: false,
  isError: false,
  isCreate: false,
  msg: "",
};

const manageMovie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_ALL_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
        pagination: action.payload.data.pagination,
      };
    case "GET_ALL_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        msg: action.payload.response.data.msg,
        pagination: {},
      };
    case "CREATE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        // isCreate: true,
      };
    case "CREATE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "CREATE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        // isCreate: false,
        msg: action.payload.response.data.msg,
      };
    case "UPDATE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "UPDATE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    case "DELETE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "DELETE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "DELETE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default manageMovie;
