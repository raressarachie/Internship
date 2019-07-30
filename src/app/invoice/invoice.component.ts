import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './model/invoice';
import { I18NHtmlParser } from '@angular/compiler';

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
   }

  ngOnInit() {
    this.getInvoices()
  }

  sortFromLtoH():any {
    this.invoices.sort((i1:Invoice, i2:Invoice)=>{return i1.total-i2.total})
  }

  sortFromHtoL():any {
    this.invoices.sort((i1:Invoice, i2:Invoice)=>{return i2.total-i1.total})
  }


}
