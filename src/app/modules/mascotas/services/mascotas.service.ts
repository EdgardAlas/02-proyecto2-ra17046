import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  constructor(private httpClient: HttpClient) {}

  get mascotas() {
    return this.httpClient.get<IMascota[]>(environment.baseUrl + '/mascotas');
  }

  buscarMascota(parametro: string) {
    if (parametro.length > 1) {
      return this.httpClient.get<IMascota[]>(
        environment.baseUrl + `/mascotas?q=${parametro}&_limit-5`
      );
    }
    return this.httpClient.get<IMascota[]>(environment.baseUrl + '/mascotas');
  }

  buscarMascotaPorId(id: string) {
    return this.httpClient.get<IMascota>(
      environment.baseUrl + `/mascotas/${id}`
    );
  }
}
