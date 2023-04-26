import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormularioComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
})
export class SharedModule {}
