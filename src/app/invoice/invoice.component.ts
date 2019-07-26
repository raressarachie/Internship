import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './model/invoice';

@Component
({
  templateUrl:'./invoice.component.html',
  styleUrls: [ './invoice.component.css' ]

})
export class InvoiceComponent implements OnInit{

  invoices : Invoice[] = []

  constructor(private invoiceService: InvoiceService) { }

  title = 'Invoice list';
  columns = ['total', 'client', 'date', 'actions'];
  headers = ['total', 'client', 'date', 'actions'];
  displayedInvoices = [];
  p=1;

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
