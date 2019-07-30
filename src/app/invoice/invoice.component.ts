import { Component, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './model/invoice';
import { Router } from '@angular/router';

@Component
({
  templateUrl:'./invoice.component.html',
  styleUrls: [ './invoice.component.css' ]

})
export class InvoiceComponent implements OnInit{

  invoices : Invoice[] = []
  displayInvoices : Invoice[] = []
  constructor(private invoiceService: InvoiceService,private router: Router) { }

  title = 'Invoice list';
  columns = ['total', 'client', 'date', 'actions'];
  headers = ['total', 'client', 'date', 'actions'];

  getInvoices(): void {
    this.invoiceService.getInvoices()
     .subscribe(invoices =>
         this.invoices = invoices
       );
   }
 
   searchTerm = '';

  ngOnInit() {
    this.getInvoices()
    this.displayInvoices = JSON.parse(JSON.stringify(this.invoices));
  }

  setSearchTerm(){
    this.displayInvoices = JSON.parse(JSON.stringify(this.invoices));
    this.displayInvoices = this.displayInvoices.filter( invoice => invoice.client.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()));
  
  }
}
