import { InvoiceComponent } from './invoice.component';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';

export const invoiceRoutes = [
  { path: '', component: InvoiceComponent},
  { path: 'edit/:id', component: InvoiceEditComponent}
]
