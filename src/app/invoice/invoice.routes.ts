import { InvoiceComponent } from './invoice.component';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

export const invoiceRoutes = [
  { path: '', component: InvoiceComponent},
  { path: 'edit/:id', component: InvoiceEditComponent},
  { path: 'view/:id', component: ViewInvoiceComponent}
]
