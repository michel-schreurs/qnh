import {citiesReducer} from "./city.reducer";
import {selectCityReducer} from "./selectiCity.reducer";

export const appReducer = {
    city: citiesReducer,
    selectedCity: selectCityReducer
}