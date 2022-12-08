import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <button type="button" routerLink="/Fuwe">Fuwe</button>
    <button type="button" routerLink="/Sywe">Sywe</button>
    <button type="button" routerLink="">Home</button>

    <div class="row">
      <div class="col-2">
        <router-outlet name="module-00"></router-outlet>
      </div>
      <div class="col-2">

        <router-outlet name="module-01"></router-outlet>
        <fakfur>
          // "fakfur["/"] -> fakfur["/detail"] -> fakfur["/beleg"]"
        </fakfur>
      </div>
    </div>

    // "fakfur - fakfur["/"] - fakfur["/detail"] - fakfur["/beleg"]"
  `
})
export class AppComponent { }
