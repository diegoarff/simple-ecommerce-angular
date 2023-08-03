import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  exports: [ButtonModule, InputTextModule, ToastModule],
  providers: [MessageService],
})
export class PrimeModule {}
