import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

// Layout
import {FooterComponent} from "./layout/footer.component";
import {NavComponent} from "./layout/nav.component";

//style guide
import { ButtonsComponent } from './sg/buttons/buttons.component';
import { FormsComponent } from './sg/forms/forms.component';


import { AppComponent } from './app.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';


const appRoutes: Routes = [
  {path:'sg/buttons', component:ButtonsComponent}
  {path:'sg/forms', component:FormsComponent}
  {path:'campaigns', component:CampaignsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonsComponent,
    FooterComponent,
    FormsComponent,
    CampaignsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
