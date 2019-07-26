import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../model/invoice';
import { InvoiceService } from '../invoice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice-edit',
  templateUrl: './invoice-edit.component.html',
  styleUrls: ['./invoice-edit.component.css']
})
export class InvoiceEditComponent implements OnInit {

  invoiceId: number;
  invoice: Invoice;
  total: FormControl;
  client: FormControl;
  date: FormControl;
  newInvoiceForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private invoiceService: InvoiceService, private datePipe: DatePipe,private router: Router) {
  }

  ngOnInit() {
    this.invoiceId = +this.activatedRoute.snapshot.params['id'];
    this.getInvoice();

    this.total = new FormControl('', Validators.required);

    this.client = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);

    this.newInvoiceForm = new FormGroup({
      total: this.total,
      client: this.client,
      date: this.date
    });

    if(this.invoiceId){
      this.total.setValue(this.invoice.total);
      this.client.setValue(this.invoice.client);
      console.log(this.datePipe.transform(this.invoice.date,"yyyy-MM-dd"))
      this.date.setValue(this.datePipe.transform(this.invoice.date,"yyyy-MM-dd"));
    }
  }

  getInvoice() {
    return this.invoiceService
    .getInvoice(this.invoiceId)
    .subscribe((invoice: Invoice) => {
      this.invoice = invoice;
    });
  }

      /**
     * Mark reactive form controls as touched.
     * @param formGroup FormGroup for which the controls are marked as touched.
     */
    markFormGroupControlsAsTouched(formGroup: FormGroup) {
      Object.keys(formGroup.controls).map(function(key) {
          formGroup.controls[key].markAsTouched();
      });
  }

  updateInvoice(formValues) {
    const invoice: Invoice = {
      id: undefined,
      total: formValues.total,
      client: formValues.client,
      date: formValues.date

    }


    this.markFormGroupControlsAsTouched(this.newInvoiceForm);


    if (this.newInvoiceForm.valid) {
      this.invoiceService.updateInvoice(invoice);
      this.router.navigate(['/users']);
    }
  }

}
