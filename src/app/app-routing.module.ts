import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index/index.component';

const routes: Routes = [
    { path: '', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }