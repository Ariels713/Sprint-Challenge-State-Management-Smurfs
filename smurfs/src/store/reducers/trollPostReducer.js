const initialState = {
  isSubmitting: false,
  postPending: false,
  name: "",
  age: "",
  height: "",
  description: "",
  trollImage: "",
};

export const trollPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PEXEL_IMAGE_START":
      return {
        ...state,
        isImageLoading: true,
      };
    case "FETCH_PEXEL_IMAGE_SUCCESS":
      return {
        ...state,
        isImageLoading: false,
        trollImage: action.payload.largeImageURL,
        altImageInfo: action.payload.tags,
      };
    case "FETCH_PEXEL_IMAGE_FAIL":
      return {
        ...state,
        isImageLoading: false,
        trollImage: `https://pixabay.com/get/53e3d1424a51b108f5d084609629337d1238dee55b4c704c7d2779d29e4ec051_1280.jpg`,
      };
    case "TROLL_FORM_POST_REQUEST_START":
      return {
        ...state,
        postPending: true,
      };
    case "TROLL_FORM_POST_REQUEST_START":
      return {
        ...state,
        postPending: false,
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        description: action.payload.height,
        id: action.payload.id,
      };
    default:
      return state;
  }
};
