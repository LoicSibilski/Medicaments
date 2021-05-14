import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionPageComponent } from './feature/connexion/pages/connexion-page/connexion-page.component';
import { InscriptionPageComponent } from './feature/inscription/pages/inscription-page/inscription-page.component';
import { MedicsPageComponent } from './feature/medics/pages/medics-page/medics-page.component';
import { NotificationPageComponent } from './feature/notification/pages/notification-page/notification-page.component';
import { RendezvousPageComponent } from './feature/rendezvous/pages/rendezvous-page/rendezvous-page.component';
import { UsersDetailComponent } from './feature/users/pages/users-detail/users-detail.component';
import { UsersEditFormComponent } from './feature/users/pages/users-edit-form/users-edit-form.component';
import { UsersListComponent } from './feature/users/pages/users-list/users-list.component';
import { UsersNewFormComponent } from './feature/users/pages/users-new-form/users-new-form.component';
import { UsersPagesComponent } from './feature/users/pages/users-pages/users-pages.component';

const routes: Routes = [
  {path:"users", component:UsersPagesComponent,
  children: [
    { path: "create", component: UsersNewFormComponent },
    { path: "detail/:id", component: UsersDetailComponent },
    { path: "update/:id", component: UsersEditFormComponent },
    { path: "list", component: UsersListComponent },
    { path: "", component: UsersListComponent }
  ]},
  {path:"medics", component:MedicsPageComponent},
  {path:"prescriptions", component:MedicsPageComponent},
  {path:"rendezvous", component:RendezvousPageComponent},
  {path:"connexion", component:ConnexionPageComponent},
  {path:"inscription", component:InscriptionPageComponent},
  {path:"notifications", component:NotificationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
