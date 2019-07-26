import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { invoiceRoutes } from './invoice.routes';
import { InvoiceService } from './invoice.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(invoiceRoutes),
    NgxPaginationModule

  ],
  declarations: [
    InvoiceComponent
  ],
  providers: [
    InvoiceService
  ]
})

export class InvoiceModule {}
