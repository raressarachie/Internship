import { OnInit, Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoice } from '../model/invoice';

@Component ({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  id: number = +this.route.snapshot.params['id'];
  total: FormControl;
  client: FormControl;
  date: FormControl;
  newInvoiceForm: FormGroup;

  constructor(private invoiceService: InvoiceService, private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.total = new FormControl('', Validators.required);
    this.client = new FormControl('', Validators.required);
    this.date = new FormControl('', Validators.required);

  this.newInvoiceForm = new FormGroup ({
    total: this.total,
    client: this.client,
    date: this.date
  });
}
  validateTotal() {
    return this.total.valid || this.total.untouched;
  }

  validateClient() {
    return this.client.valid || this.client.untouched;
  }

  validateDate() {
    return this.date.valid || this.date.untouched;
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

  saveInvoice(formValues) {
    const invoice: Invoice = {
      id: undefined,
      total: formValues.total,
      client: formValues.client,
      date: new Date(formValues.date.year, formValues.date.month-1, formValues.date.day)
    };
    this.markFormGroupControlsAsTouched(this.newInvoiceForm);

    if ( this.newInvoiceForm.valid) {
      this.invoiceService.saveInvoice(invoice);
      this.router.navigate(['/invoice']);
    }
  }

  cancel() {
    this.router.navigate(['/invoice']);

  }

}
