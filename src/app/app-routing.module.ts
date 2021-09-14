import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';


const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: '', component:  PostListComponentComponent},
  {path: '', component:  PostListItemComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
