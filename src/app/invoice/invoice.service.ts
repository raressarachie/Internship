import { Injectable } from '@angular/core';
import { Invoice } from './model/invoice';
import { Repository } from './model/invoiceRepo';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getInvoice(id: number): Observable<Invoice> {
    return this.getInvoices()
      .pipe(map(invoices => invoices.find(invoice => invoice.id == id)));
  }

  getNextId(): number {
    return Math.max.apply(Math, this.invoices.map(o => o.id)) + 1;
  }

  updateInvoice(invoice) {
    for (let i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].id === invoice.id) {
        
        this.invoices[i] = invoice;
        return;
      }
    }
  }



}
