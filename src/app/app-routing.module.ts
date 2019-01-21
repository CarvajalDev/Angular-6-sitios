import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { SitioComponent } from './sitio/sitio.component';
import { CategoriesResultComponent } from './categories-result/categories-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sitio/:id', component: SitioComponent },
  { path: 'users', component: UsersComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'categories-result/:id', component: CategoriesResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
