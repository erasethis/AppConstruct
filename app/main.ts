import { bootstrap } from "angular2/platform/browser";
import { App } from "./app.component";

bootstrap(App)
    .then(success => console.log("bootstrap succesful"))
    .catch(error => console.log("bootstrap failed: " + error));