export default function animalsReducer(state = { loading: false, animals: [], currentAnimal: {'name': "placeholder", 'imageURL': "test.com"} }, action) {
  switch (action.type) {
    case "LOADING_AnimalS":
      return {
        ...state,
        loading: true
      }

    case "FETCH_AnimalS":
      return {
        ...state,
        loading: false,
        animals: action.payload
      }

    case "FETCH_Animal":
      return {
        ...state,
        loading: false,
        currentAnimal: action.payload
      }

    case "TOGGLE_FAV":
      return {
        ...state,
        currentAnimal: action.payload
      }

    default:
      return state
  }
}
