//city.reducer.ts

import * as fromCityActions from '../actions/cities.actions';
import {City} from '../models/city.model';
import {stat} from "fs";

// Set up a dummy city (i.e. state) to start with.
export const initialState: City[] = [
    new City(-1, 'Unknown City', 'Unknown Province')
];

export function citiesReducer(state = initialState, action: fromCityActions.All) {
    switch (action.type) {
        case fromCityActions.LOAD_CITIES: {
            // add the payload (= a new city) to the
            // already existing state and return it as a new object/array.
            return [...action.payload]
        }
        case fromCityActions.REMOVE_CITY: {
            return state.filter(city => city !== action.payload);
        }
        // TODO: more cases, to edit/update or add city

        case fromCityActions.ADD_CITY: {
            return [...state, action.payload]
        }

        case fromCityActions.UPDATE_CITY: {
            return state.map(city => {
                return city.id === action.payload.id ? action.payload : city
            })
        }

        default: {
            // return unaltered state
            return state;
        }
    }
}