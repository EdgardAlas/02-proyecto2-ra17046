import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent implements OnInit {
  formMascota!: FormGroup;
  private isLetras = new RegExp('^[a-zA-Z ]*$');
  private isNumeros = new RegExp('^[0-9]*$');
  @Input() leyenda: string = '';
  @Input() mascota!: IMascota;

  razas = [
    { raza: 'Affenpinscher' },
    { raza: 'Basenji' },
    { raza: 'Pinscher' },
    { raza: 'Pastor de Antolia' },
    { raza: 'Pastor Ganadero' },
    { raza: 'Silky Terrier' },
    { raza: 'Chihuahua' },
    { raza: 'Pinscher' },
    { raza: 'Chow Chow' },
    { raza: 'Afgano' },
    { raza: 'Bóxer' },
    { raza: 'King Charles Spaniel' },
    { raza: 'Sabueso Bávaro de Montaña' },
  ];

  origenes = [
    { origen: 'África' },
    { origen: 'Alemania' },
    { origen: 'Australia' },
    { origen: 'Afganistán' },
    { origen: 'Chihuahua' },
    { origen: 'Japonés' },
    { origen: 'Medio Oriente' },
    { origen: 'Mongolia' },
    { origen: 'Desconocida' },
  ];

  constructor(
    private mascotasService: MascotasService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formMascota = this.iniciarFormulario();
    this.loadMascota();
  }

  loadMascota() {
    if (this.mascota) {
      this.formMascota.reset({
        raza: this.mascota.raza,
        origen: this.mascota.origen,
        guardian: this.mascota.guardian,
        peso: this.mascota.peso,
        des: this.mascota.des,
        salud: this.mascota.salud,
        ejercicio: this.mascota.ejercicio,
        nutricion: this.mascota.nutricion,
      });
    }
  }

  private iniciarFormulario() {
    return this.fb.group({
      raza: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      guardian: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      des: ['', [Validators.required, Validators.minLength(5)]],
      salud: ['', [Validators.required, Validators.minLength(5)]],
      ejercicio: ['', [Validators.required, Validators.minLength(5)]],
      nutricion: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formMascota.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }

  guardar() {
    if (this.formMascota.valid) {
      if (this.mascota) {
        this.editando();
      } else {
        this.registrando();
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Faltan campos por llenar',
        icon: 'error',
      });
      Object.values(this.formMascota.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  registrando() {
    const mascota = this.formMascota.value;
    this.mascotasService.nuevaMascota(mascota).subscribe({
      next: (data) => {
        if (data) {
          Swal.fire({
            position: 'center',
            title: 'Mascota registrada',
            text: 'Mascota registrada con éxito',
            icon: 'success',
          });
          this.formMascota.reset();
          this.closeModal();
        }
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al registrar la mascota',
          icon: 'error',
        });
      },
    });
  }

  editando() {
    this.mascota.raza = this.formMascota.get('raza')?.value;
    this.mascota.origen = this.formMascota.get('origen')?.value;
    this.mascota.guardian = this.formMascota.get('guardian')?.value;
    this.mascota.peso = this.formMascota.get('peso')?.value;
    this.mascota.des = this.formMascota.get('des')?.value;
    this.mascota.salud = this.formMascota.get('salud')?.value;
    this.mascota.ejercicio = this.formMascota.get('ejercicio')?.value;
    this.mascota.nutricion = this.formMascota.get('nutricion')?.value;
    this.mascotasService.editarMascota(this.mascota).subscribe({
      next: (data) => {
        if (data) {
          Swal.fire({
            position: 'center',
            title: 'Mascota editada',
            text: 'Mascota editada con éxito',
            icon: 'success',
          });
          this.formMascota.reset();
          this.closeModal();
        }
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: 'Error al editar la mascota',
          icon: 'error',
        });
      },
    });
  }

  mostrar() {
    const currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  closeModal() {
    document.getElementById('closeModal')?.click();
  }
}
