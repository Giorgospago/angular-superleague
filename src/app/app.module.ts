import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { TeamComponent } from './components/team/team.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

const routes = [
  {path: "", component: ListComponent},
  {path: "create", component: CreateComponent},
  {path: "team/:teamId", component: TeamComponent},
  {path: "edit/:teamId", component: EditComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    TeamComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
