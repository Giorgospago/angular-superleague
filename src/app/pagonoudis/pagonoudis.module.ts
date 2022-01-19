import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from '../components/list/list.component';
import { CreateComponent } from '../components/create/create.component';
import { TeamComponent } from '../components/team/team.component';
import { EditComponent } from '../components/edit/edit.component';
import { LiveSearchComponent } from '../components/live-search/live-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  {path: "", component: ListComponent},
  {path: "create", component: CreateComponent},
  {path: "team/:teamId", component: TeamComponent},
  {path: "edit/:teamId", component: EditComponent},
  {path: "live-search", component: LiveSearchComponent},
];

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    TeamComponent,
    EditComponent,
    LiveSearchComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class PagonoudisModule { }
