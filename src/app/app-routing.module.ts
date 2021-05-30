import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [{ path: 'about', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

{
  path:"",
  component : IndexComponent

},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},

{ path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
