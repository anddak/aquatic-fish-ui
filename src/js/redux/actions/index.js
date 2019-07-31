import {UPDATE_DRAWER} from "../../constants/action-types";

export function changeDrawerVisibility(payload) {
  return { type: UPDATE_DRAWER, payload }
};