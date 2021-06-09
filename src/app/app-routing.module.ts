import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent      } from './auth/auth.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full'  },

  { path: 'auth'      , component: AuthComponent       },
  { path: 'items-list', component: ItemsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash             : true,
    onSameUrlNavigation : 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
