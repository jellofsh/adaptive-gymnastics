import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { FamiliesComponent } from './families/families.component';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'volunteers', component: VolunteersComponent },
  { path: 'families', component: FamiliesComponent },
  { path: 'exercises', component: ExercisesComponent },
];