import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './components/commits/commits.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: SearchProfileComponent},
  {path: 'profile/:searchText', component: UserDetailsComponent},
  {path: 'profile/:searchText/:repoName/commits', component: CommitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
