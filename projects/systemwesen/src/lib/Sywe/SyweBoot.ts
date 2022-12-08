import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "sywe-content",
  template: "<div>Sywe content</div>"
})
export class SyweContentComponent { }

@Component({
  selector: "sywe",
  template: "<router-outlet></router-outlet>"
})
export class SyweBoot { }

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: SyweContentComponent
    }
  ])],
  declarations: [SyweBoot],
  bootstrap: [SyweBoot],
})
export class SyweModule { }
