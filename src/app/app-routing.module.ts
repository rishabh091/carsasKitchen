import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GroupDinningsComponent } from './group-dinnings/group-dinnings.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "group-dinings",
    component: GroupDinningsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
