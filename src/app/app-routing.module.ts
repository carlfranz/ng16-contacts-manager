import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'contact/:id',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    bindToComponentInputs :true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
