import {Component} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, map, take, takeUntil} from "rxjs/operators";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    routingMsg$: Observable<any>;

    constructor(private router: Router) {
        console.log('AppComponent created');
    }

    // subscribing to router events. The router actually
    // delivers observables that we can subscribe to (or use the | async pipe)
    ngOnInit() {
        // 1. Traditional way
        // this.router.events.subscribe(event => {
        // console.log(event);
        // if(event instanceof NavigationStart){
        //     console.log(event);
        // }
        // })

        // 2. OR: in a more reactive way
        //  this.router.events
        //      .filter(e=>e instanceof NavigationStart)
        //      .subscribe(result => console.log(result))

        // 3. OR:  using new pipeable operators
        this.routingMsg$ = this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
    }
}
