// selectCity.reducer.ts

import {City} from "../models/city.model";
import {Action} from "@ngrx/store";

import * as fromCityActions from '../actions/cities.actions';

export const initialState: City = null;

export function selectCityReducer(state = initialState, action: fromCityActions.All) {
    switch (action.type) {
        case fromCityActions.SELECT_CITY: {
            // set the selected city to the provided city in payload
            return action.payload;
        }
        case fromCityActions.CLEAR_CITY:{
            // reset the selected city back to null
            return null;
        }
        default: {
            return state;
        }
    }
}