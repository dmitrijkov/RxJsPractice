import {Observable} from "rxjs";

let obs = new Observable(subscriber => {
    subscriber.next(Math.random());

    subscriber.complete();
});

obs.subscribe(el => console.log(el));
obs.subscribe(el => console.log(el));
obs.subscribe(el => console.log(el));


