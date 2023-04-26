import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IPais } from '@shared/interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class UbicacionPaisService {
  private http = inject(HttpClient);

  constructor() {}

  public getDepa() {
    return this.http.get<IPais[]>('assets/departamentos.json');
  }
}
