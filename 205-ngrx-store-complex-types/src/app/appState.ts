import {City} from './models/city.model';

export interface AppState {
	city: City[];
	selectedCity: City
}
