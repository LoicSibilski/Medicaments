import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './feature/auth/connexion/connexion.component';
import { InscriptionComponent } from './feature/auth/inscription/inscription.component';
import { MdpOublieComponent } from './feature/auth/mdp-oublie/mdp-oublie.component';
import { HomePageComponent } from './feature/home/pages/home-page/home-page.component';
import { MedicsDetailComponent } from './feature/medics/pages/medics-detail/medics-detail.component';
import { MedicsEditFormComponent } from './feature/medics/pages/medics-edit-form/medics-edit-form.component';
import { MedicsListComponent } from './feature/medics/pages/medics-list/medics-list.component';
import { MedicsNewFormComponent } from './feature/medics/pages/medics-new-form/medics-new-form.component';
import { MedicsPageComponent } from './feature/medics/pages/medics-page/medics-page.component';
import { NotfoundComponent } from './feature/notfound/notfound.component';
import { NotificationDetailComponent } from './feature/notification/pages/notification-detail/notification-detail.component';
import { NotificationEditFormComponent } from './feature/notification/pages/notification-edit-form/notification-edit-form.component';
import { NotificationListComponent } from './feature/notification/pages/notification-list/notification-list.component';
import { NotificationNewFormComponent } from './feature/notification/pages/notification-new-form/notification-new-form.component';
import { NotificationPageComponent } from './feature/notification/pages/notification-page/notification-page.component';
import { PrescriptionsDetailComponent } from './feature/prescription/pages/prescriptions-detail/prescriptions-detail.component';
import { PrescriptionsEditFormComponent } from './feature/prescription/pages/prescriptions-edit-form/prescriptions-edit-form.component';
import { PrescriptionsListComponent } from './feature/prescription/pages/prescriptions-list/prescriptions-list.component';
import { PrescriptionsNewFormComponent } from './feature/prescription/pages/prescriptions-new-form/prescriptions-new-form.component';
import { PrescriptionsPageComponent } from './feature/prescription/pages/prescriptions-page/prescriptions-page.component';
import { RendezvousDetailComponent } from './feature/rendezvous/pages/rendezvous-detail/rendezvous-detail.component';
import { RendezvousEditFormComponent } from './feature/rendezvous/pages/rendezvous-edit-form/rendezvous-edit-form.component';
import { RendezvousListComponent } from './feature/rendezvous/pages/rendezvous-list/rendezvous-list.component';
import { RendezvousNewFormComponent } from './feature/rendezvous/pages/rendezvous-new-form/rendezvous-new-form.component';
import { RendezvousPageComponent } from './feature/rendezvous/pages/rendezvous-page/rendezvous-page.component';
import { AssistantDetailComponent } from './feature/users/pages/assistant-detail/assistant-detail.component';
import { UsersDetailComponent } from './feature/users/pages/users-detail/users-detail.component';
import { UsersEditFormComponent } from './feature/users/pages/users-edit-form/users-edit-form.component';
import { UsersListComponent } from './feature/users/pages/users-list/users-list.component';
import { UsersNewFormComponent } from './feature/users/pages/users-new-form/users-new-form.component';
import { UsersPagesComponent } from './feature/users/pages/users-pages/users-pages.component';

const routes: Routes = [
  {
    path: "users", component: UsersPagesComponent,
    children: [
      { path: "create", component: UsersNewFormComponent },
      { path: "detail", component: UsersDetailComponent, children: [
        { path:":id", component: UsersDetailComponent},
        { path:"assistant/:id", component: AssistantDetailComponent}
      ] },
      { path: "update/:id", component: UsersEditFormComponent },
      { path: "list", component: UsersListComponent },
      { path: "", component: UsersListComponent }
    ]
  },

  {
    path: "medics", component: MedicsPageComponent,
    children: [
      { path: "create", component: MedicsNewFormComponent },
      { path: "detail/:id", component: MedicsDetailComponent },
      { path: "update/:id", component: MedicsEditFormComponent },
      { path: "list", component: MedicsListComponent },
      { path: "", component: MedicsListComponent }
    ]
  },

  {
    path: "prescriptions", component: PrescriptionsPageComponent,
    children: [
      { path: "create", component: PrescriptionsNewFormComponent },
      { path: "detail/:id", component: PrescriptionsDetailComponent },
      { path: "update/:id", component: PrescriptionsEditFormComponent },
      { path: "list", component: PrescriptionsListComponent },
      { path: "", component: PrescriptionsListComponent }
    ]
  },

  {
    path: "rendezvous", component: RendezvousPageComponent,
    children: [
      { path: "create", component: RendezvousNewFormComponent },
      { path: "detail/:id", component: RendezvousDetailComponent },
      { path: "update/:id", component: RendezvousEditFormComponent },
      { path: "list", component: RendezvousListComponent },
      { path: "", component: RendezvousListComponent }
    ]
  },

  {
    path: "notifications", component: NotificationPageComponent,
    children: [
      { path: "create", component: NotificationNewFormComponent },
      { path: "detail/:id", component: NotificationDetailComponent },
      { path: "update/:id", component: NotificationEditFormComponent },
      { path: "list", component: NotificationListComponent },
      { path: "", component: NotificationListComponent }
    ]
  },

  { path: "inscription", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "mdp_oublie", component: MdpOublieComponent },
  { path: "home", component: HomePageComponent },
  { path: "", component: HomePageComponent },
  { path: "404", component: NotfoundComponent },
  { path: "**", redirectTo: "404" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
