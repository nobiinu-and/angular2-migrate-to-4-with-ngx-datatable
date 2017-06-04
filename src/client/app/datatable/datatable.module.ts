import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './datatable.component';
import { DatatableRoutingModule } from './datatable-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [NgxDatatableModule, DatatableRoutingModule, SharedModule],
  declarations: [DatatableComponent],
  exports: [DatatableComponent]
})
export class DatatableModule { }
