import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersPagesComponent } from './feature/users/pages/users-pages/users-pages.component';
import { UsersDetailComponent } from './feature/users/pages/users-detail/users-detail.component';
import { UsersListComponent } from './feature/users/pages/users-list/users-list.component';
import { UsersEditFormComponent } from './feature/users/pages/users-edit-form/users-edit-form.component';
import { UsersNewFormComponent } from './feature/users/pages/users-new-form/users-new-form.component';
import { UsersFormComponent } from './feature/users/components/users-form/users-form.component';
import { MedicsPageComponent } from './feature/medics/pages/medics-page/medics-page.component';
import { MedicsDetailComponent } from './feature/medics/pages/medics-detail/medics-detail.component';
import { MedicsListComponent } from './feature/medics/pages/medics-list/medics-list.component';
import { MedicsEditFormComponent } from './feature/medics/pages/medics-edit-form/medics-edit-form.component';
import { MedicsNewFormComponent } from './feature/medics/pages/medics-new-form/medics-new-form.component';
import { MedicFormComponent } from './feature/medics/components/medic-form/medic-form.component';
import { PrescriptionsPageComponent } from './feature/prescription/pages/prescriptions-page/prescriptions-page.component';
import { PrescriptionsDetailComponent } from './feature/prescription/pages/prescriptions-detail/prescriptions-detail.component';
import { PrescriptionsListComponent } from './feature/prescription/pages/prescriptions-list/prescriptions-list.component';
import { PrescriptionsEditFormComponent } from './feature/prescription/pages/prescriptions-edit-form/prescriptions-edit-form.component';
import { PrescriptionsNewFormComponent } from './feature/prescription/pages/prescriptions-new-form/prescriptions-new-form.component';
import { PrescriptionsFormComponent } from './feature/prescription/components/prescriptions-form/prescriptions-form.component';
import { RendezvousFormComponent } from './feature/rendezvous/components/rendezvous-form/rendezvous-form.component';
import { RendezvousPageComponent } from './feature/rendezvous/pages/rendezvous-page/rendezvous-page.component';
import { RendezvousDetailComponent } from './feature/rendezvous/pages/rendezvous-detail/rendezvous-detail.component';
import { RendezvousListComponent } from './feature/rendezvous/pages/rendezvous-list/rendezvous-list.component';
import { RendezvousEditFormComponent } from './feature/rendezvous/pages/rendezvous-edit-form/rendezvous-edit-form.component';
import { RendezvousNewFormComponent } from './feature/rendezvous/pages/rendezvous-new-form/rendezvous-new-form.component';
import { NotificationPageComponent } from './feature/notification/pages/notification-page/notification-page.component';
import { NotificationDetailComponent } from './feature/notification/pages/notification-detail/notification-detail.component';
import { NotificationListComponent } from './feature/notification/pages/notification-list/notification-list.component';
import { NotificationEditFormComponent } from './feature/notification/pages/notification-edit-form/notification-edit-form.component';
import { NotificationNewFormComponent } from './feature/notification/pages/notification-new-form/notification-new-form.component';
import { NotificationFormComponent } from './feature/notification/components/notification-form/notification-form.component';
import { ComptePageComponent } from './feature/compte/pages/compte-page/compte-page.component';
import { HomePageComponent } from './feature/home/pages/home-page/home-page.component';
import { NotfoundComponent } from './feature/notfound/notfound.component';
import { ButtonRedirectorComponent } from './shared-component/button-redirector/button-redirector.component';
import { PosologiesPageComponent } from './feature/posologie/pages/posologies-page/posologies-page.component';
import { PosologiesDetailComponent } from './feature/posologie/pages/posologies-detail/posologies-detail.component';
import { PosologiesEditFormComponent } from './feature/posologie/pages/posologies-edit-form/posologies-edit-form.component';
import { PosologiesListComponent } from './feature/posologie/pages/posologies-list/posologies-list.component';
import { PosologiesNewFormComponent } from './feature/posologie/pages/posologies-new-form/posologies-new-form.component';
import { PosologieFormComponent } from './feature/posologie/components/posologie-form/posologie-form.component';
import { AssistantDetailComponent } from './feature/users/pages/assistant-detail/assistant-detail.component';
import { ConnexionComponent } from './feature/authentification/connexion/connexion.component';
import { InscriptionComponent } from './feature/authentification/inscription/inscription.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersPagesComponent,
    UsersDetailComponent,
    UsersListComponent,
    UsersEditFormComponent,
    UsersNewFormComponent,
    UsersFormComponent,
    MedicsPageComponent,
    MedicsDetailComponent,
    MedicsListComponent,
    MedicsEditFormComponent,
    MedicsNewFormComponent,
    MedicFormComponent,
    PrescriptionsPageComponent,
    PrescriptionsDetailComponent,
    PrescriptionsListComponent,
    PrescriptionsEditFormComponent,
    PrescriptionsNewFormComponent,
    PrescriptionsFormComponent,
    RendezvousFormComponent,
    RendezvousPageComponent,
    RendezvousDetailComponent,
    RendezvousListComponent,
    RendezvousEditFormComponent,
    RendezvousNewFormComponent,
    NotificationPageComponent,
    NotificationDetailComponent,
    NotificationListComponent,
    NotificationEditFormComponent,
    NotificationNewFormComponent,
    NotificationFormComponent,
    ComptePageComponent,
    HomePageComponent,
    NotfoundComponent,
    ButtonRedirectorComponent,
    PosologiesPageComponent,
    PosologiesDetailComponent,
    PosologiesEditFormComponent,
    PosologiesListComponent,
    PosologiesNewFormComponent,
    PosologieFormComponent,
    AssistantDetailComponent,
    ConnexionComponent,
    InscriptionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
