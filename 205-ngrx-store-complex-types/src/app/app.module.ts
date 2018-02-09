import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Store Stuff
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

// import combined reducers
import {appReducer} from "./reducers/reducers";

// component
import {AppComponent} from './app.component';

// services
import {CityService} from './services/city.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports     : [
		BrowserModule,
		StoreModule.forRoot(appReducer),
		StoreDevtoolsModule.instrument({
			maxAge: 10}) // Redux Devtools debugging in Chrome
	],
	providers   : [CityService],
	bootstrap   : [AppComponent]
})
export class AppModule {
}
