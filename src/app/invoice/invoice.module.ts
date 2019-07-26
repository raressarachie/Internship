import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { invoiceRoutes } from './invoice.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(invoiceRoutes),
  ],
  declarations: [
    InvoiceComponent
  ],
  providers: [

  ]
})

export class InvoiceModule {}
