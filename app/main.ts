import { bootstrap } from "angular2/platform/browser";
import { Window } from "./window.component";

bootstrap(Window)
    .then(success => console.log("bootstrap succesful"))
    .catch(error => console.log("bootstrap failed: " + error));