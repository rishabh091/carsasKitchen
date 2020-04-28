import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GroupDinningsComponent } from './group-dinnings/group-dinnings.component';
import { ReservationsComponent } from './reservations/reservations.component';


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
  },
  {
    path: "reservations",
    component: ReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
