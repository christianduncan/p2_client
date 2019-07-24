export default function animalsReducer(state = { loading: false, animals: [], currentAnimal: {'name': "placeholder", 'imageURL': "test.com"} }, action) {
  switch (action.type) {
    case "LOADING_ANIMALS":
      return {
        ...state,
        loading: true
      }

    case "FETCH_ANIMALS":
      return {
        ...state,
        loading: false,
        animals: action.payload
      }

    case "FETCH_ANIMAL":
      return {
        ...state,
        loading: false,
        currentAnimal: action.payload
      }


    default:
      return state
  }
}
