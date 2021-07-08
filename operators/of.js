import {of} from 'rxjs';

const data = of(1, 2, 3);

data.subscribe(el => console.log(el));
data.subscribe(el => console.log(el));