import { from } from "rxjs";

const s = from("abcdefghijklmnopqrstuvwxyz");
s.subscribe(el => console.log(el));
