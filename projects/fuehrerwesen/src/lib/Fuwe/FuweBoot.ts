import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "fuwe-content",
  template: "<div>Fuwe content</div>"
})
export class FuweContentComponent { }

@Component({
  selector: "fuwe",
  template: "<router-outlet></router-outlet>"
})
export class FuweBoot { }

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: FuweContentComponent
    }
  ])],
  declarations: [FuweBoot],
  bootstrap: [FuweBoot],
})
export class FuweModule { }
