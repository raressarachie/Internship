import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './model/invoice';

@Component
({
  templateUrl:'./invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoices : Invoice[] = []

  constructor(private invoiceService: InvoiceService) {}

  getInvoices(): void {
    this.invoiceService.getInvoices()
     .subscribe(invoices =>
         this.invoices = invoices
       );

    console.log(this.invoices)
   }

  ngOnInit() {
    this.getInvoices()
  }

}
