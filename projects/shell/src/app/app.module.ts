import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { IModuleRegistration } from "infrastructure";
import { SyweModuleRegistration } from "systemwesen-modules/modules-registration";
import { FuweModuleRegistration } from "fuehrerwesen-modules/modules-registration";

import { AppComponent } from "./app.component";

function toRoutes(registrations: Array<IModuleRegistration>, importModulesOfArea: () => Promise<any>): Routes {
  return registrations.map(registration => ({
    path: registration.moduleName,
    loadChildren: () => importModulesOfArea().then(imported => imported[registration.angularModuleName])
  }));
}

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      ...toRoutes(FuweModuleRegistration, () => import(// webpackChunkName: "Fuehrerwesen"
        "fuehrerwesen-modules"
      )),
      ...toRoutes(SyweModuleRegistration, () => import(// webpackChunkName: "Systemwesen"
        "systemwesen-modules"
      ))
    ])
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
