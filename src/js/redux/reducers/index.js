import { UPDATE_DRAWER} from "../../constants/action-types";

const initialState = {
  drawerVisible: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === UPDATE_DRAWER) {
    return Object.assign({}, state, {drawerVisible: !state.drawerVisible});
    }
  return state;
  }

export default rootReducer;