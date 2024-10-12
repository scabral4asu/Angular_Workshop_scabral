import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "assignments", component: AssignmentsComponent}, 
    {path: "home", component: HomeComponent}
];
