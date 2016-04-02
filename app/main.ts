import { bootstrap } from "angular2/platform/browser";
import { SampleAppComponent } from "./sample-app.component";

bootstrap(SampleAppComponent)
    .then(success => console.log("bootstrap succesful"))
    .catch(error => console.log("bootstrap failed: " + error));