import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { invoiceRoutes } from './invoice.routes';
import { InvoiceService } from './invoice.service';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(invoiceRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule

  ],
  declarations: [
    InvoiceComponent,
    InvoiceEditComponent,
    ViewInvoiceComponent,
    CreateInvoiceComponent
  ],
  providers: [
    InvoiceService,
    DatePipe
  ]
})

export class InvoiceModule {}
