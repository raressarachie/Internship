import { OnInit, Component } from '@angular/core';
import { Invoice } from '../model/invoice';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'view-invoice',
  templateUrl: "./view-invoice.component.html",
  styles: [ `
  .container
  { padding-left:20px; padding-right: 20px;}
  `]
})

export class ViewInvoiceComponent implements OnInit {
  invoices: any[]
  invoice: Invoice;

  constructor (private invoiceService: InvoiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    let id = +this.activatedRoute.snapshot.params['id'];
    this.invoiceService.getInvoice(id).subscribe(invoice => {
      this.invoice = invoice
    });

  }



  back(){
    this.router.navigate(['/invoices'])
  }

}
