import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  EMAIL_VALIDATOR,
  NAME_VALIDATOR,
  NUMBER_VALIDATOR,
} from '@constants/routes/constants';
import { IPais } from '@shared/interfaces/pais.interface';
import { UbicacionPaisService } from '@shared/services/ubicacion-pais.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  formularioGeneral!: FormGroup;
  departametos: IPais[] = [];
  municipios: IPais[] = [];
  cantones: IPais[] = [];
  private isEmail = EMAIL_VALIDATOR;
  private isName = NAME_VALIDATOR;
  private isMoney = NUMBER_VALIDATOR;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private ubicacionService: UbicacionPaisService
  ) {}

  ngOnInit(): void {
    this.iniciarFormulario();
    this.llenarComboDepartamentos();
  }

  private iniciarFormulario() {
    this.formularioGeneral = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.isName)]],
      apellido: ['', [Validators.required, Validators.pattern(this.isName)]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      genero: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      mensaje: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200),
        ],
      ],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      canton: ['', [Validators.required]],
      direccion: this.fb.group({
        ubicacion: ['', []],
        colonia: ['', [Validators.nullValidator]],
      }),
      gustos: this.fb.group({
        verde: ['', []],
        rojo: ['', []],
        negro: ['', []],
      }),
      estado: ['', []],
      salario: [
        '',
        [
          Validators.required,
          Validators.pattern(this.isMoney),
          Validators.min(300),
        ],
      ],
      pasatiempos: this.fb.array([]),
    });
  }

  guardar() {
    if (this.formularioGeneral.valid) {
      Swal.fire({
        title: 'Buen trabajo',
        text: 'Submit disparado, formulario es valido',
        icon: 'info',
        position: 'center',
      });
      console.log(this.formularioGeneral.value);
    } else {
      Swal.fire({
        title: 'Faltan datos en el formulario',
        text: 'Submit disparado, formulario no valido',
        icon: 'info',
        position: 'center',
      });

      return Object.values(this.formularioGeneral.controls).forEach(
        (control) => {
          control.markAsTouched();
        }
      );
    }
  }

  esCampoValido(campo: string) {
    const validarCampo = this.formularioGeneral.get(campo);
    return !validarCampo?.valid && validarCampo?.touched
      ? 'is-invalid'
      : validarCampo?.touched
      ? 'is-valid'
      : '';
  }

  llenarComboDepartamentos() {
    this.ubicacionService
      .getDepa()
      .pipe(
        map((dp) => {
          return dp.filter((depa) => depa.codigo.length === 2);
        })
      )
      .subscribe((data) => {
        this.departametos = data;
      });
  }

  deptoChange(id: string) {
    this.ubicacionService
      .getDepa()
      .pipe(
        map((dp) =>
          dp.filter((mp) => mp.codigo.startsWith(id) && mp.codigo.length === 4)
        )
      )
      .subscribe((data) => {
        this.municipios = data;
      });
  }

  muniChange(id: string) {
    this.ubicacionService
      .getDepa()
      .pipe(
        map((dp) =>
          dp.filter((mp) => mp.codigo.startsWith(id) && mp.codigo.length === 6)
        )
      )
      .subscribe((data) => {
        this.cantones = data;
      });
  }

  noRequiereValor(campo: string) {
    const validarCampo = this.formularioGeneral.get(campo);
    return validarCampo?.value ? 'is-valid' : '';
  }

  get pasatiempos() {
    return this.formularioGeneral.get('pasatiempos') as FormArray;
  }

  get controls() {
    return this.pasatiempos.controls;
  }

  agregarPasatiempos() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempos(i: number) {
    this.pasatiempos.removeAt(i);
  }
}
