import {
  GET_BUSINESSES,
  CREATE_BUSINESS,
  GET_BUSINESS,
  UPDATE_BUSINESS,
  DELETE_BUSINESS
} from "../constants";

export default function business(
  state = {
    data: [
      {
        name: "Ibukun Dairo",
        description: "Senior Software Engineer",
        phone: "08158486068",
        url: "hibeekaey.me",
        categories: ["Software"],
        images: ["https://placeimg.com/160/160/any"]
      },
      {
        name: "Cuesoft",
        description: "CEO",
        phone: "09026509478",
        url: "cuesoft.io",
        categories: ["Software"],
        images: ["https://placeimg.com/160/160/any"]
      }
    ]
  },
  action
) {
  switch (action.type) {
    case GET_BUSINESSES:
      return {
        ...state
      };
    case CREATE_BUSINESS:
      return {
        ...state
      };
    case GET_BUSINESS:
      return {
        ...state
      };
    case UPDATE_BUSINESS:
      return {
        ...state
      };
    case DELETE_BUSINESS:
      return {
        ...state
      };
    default:
      return state;
  }
}
