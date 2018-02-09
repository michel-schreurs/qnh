import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {City} from './models/city.model';
import {AppState} from './appState';
import {CityService} from './services/city.service';

import * as fromCityActions from './actions/cities.actions';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    cities$: Observable<City[]>;
    numCities$: Observable<number>;
    selectedCity$: Observable<City>;
    currentCity: City;

    constructor(private store: Store<AppState>,
                private cityService: CityService) {
    }

    // Bind observable to this slice of state from the store
    ngOnInit() {
        this.cities$ = this.store.select(s => s.city);
        this.selectedCity$ = this.store.select(s => s.selectedCity);
        this.numCities$ = this.cities$.map(c => c.length);
    }

    // load initial cities on mouseclick
    loadCities() {
        this.cityService.loadCities();
    }

    // Remove city from store
    removeCity(city) {
        this.store.dispatch(new fromCityActions.RemoveCity(city));
    }

    //******************
    //TODO:  as an exercise for the reader....
    //******************
    addCity(city: HTMLInputElement) {
        // TODO: add city to store
        // alert('TODO: add city: ' + city.value);
        let newId: number = -1;
        this.cities$.subscribe(c => newId = c.length + 1);
        let newCity = new City(newId, city.value);
        this.store.dispatch(new fromCityActions.AddCity(newCity))
    }

    // At this point the decision is to handle editing cities via the store.
    // This is a discussion point. It might as well be valid to edit data
    // directly in this component (via a local class variable) and *then* dispatch
    // the result to the store.
    // This is a nice demonstration however how it could be done.
    // It also added a new slice to the state tree, holding the selected city.
    editCity(city) {
        this.store.dispatch(new fromCityActions.SelectCity(city))
    }

    saveCity(city: HTMLInputElement) {
        // not elegant. Is there a better way?
        let updatedCity: City = new City();
        let sub:Subscription;
        sub = this.selectedCity$.subscribe(c => {
            updatedCity.id = c.id;
            updatedCity.inhabitants = c.inhabitants;
            updatedCity.province = c.province;
            updatedCity.name = city.value; // from the textbox in UI
        });
        this.store.dispatch(new fromCityActions.UpdateCity(updatedCity));
        sub.unsubscribe();
        this.cancel();
    }

    cancel() {
        this.store.dispatch(new fromCityActions.ClearCity())
    }
}
