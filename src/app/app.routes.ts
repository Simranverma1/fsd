import { Routes } from '@angular/router';
import { PatentListComponent } from './patent-list/patent-list.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { PatentProjectComponent } from './patent-project/patent-project.component';

export const routes: Routes = [
  { path: '', component: PatentListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'patent-project', component: PatentProjectComponent }
];
