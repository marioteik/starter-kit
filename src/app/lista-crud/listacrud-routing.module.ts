import { RouterModule, Routes } from '@angular/router';
import { ListaCrudComponent } from './component';
import { NgModule } from '@angular/core';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: ListaCrudComponent,
    data: { title: marker('lista-crud') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ListaCrudRoutingModule {}
