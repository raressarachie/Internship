import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Injectable } from '@angular/core';

@Injectable()

export class InvoiceRouteActivator implements CanActivate
 {
   constructor(private invoiceService: InvoiceService,
    private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot) {
      const invoiceExists = !!this.invoiceService.getInvoice(+route.params['id'])

      if(!invoiceExists)
        this.router.navigate(['/404'])

      return invoiceExists
    }
 }
