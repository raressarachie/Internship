import { Injectable } from '@angular/core';
import { Invoice } from './model/invoice';
import { Repository } from './model/invoiceRepo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  repository : Repository;
  invoices : Invoice[] = [];

  constructor() {
    this.repository = new Repository();
    this.invoices = this.repository.invoices;
  }

  getInvoices(): Observable<Invoice[]> {
    return of(this.invoices);
  }
}
