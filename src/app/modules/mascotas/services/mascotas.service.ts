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

  obtenerAll(): Promise<IMascota[]> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<IMascota[]>(environment.baseUrl + '/mascotas')
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          },
        });
    });
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

  buscarMascotaPromesaPorId(id: string): Promise<IMascota> {
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<IMascota>(environment.baseUrl + `/mascotas/${id}`)
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          },
        });
    });
  }

  eliminarMascota(id: number) {
    return this.httpClient.delete(environment.baseUrl + `/mascotas/${id}`);
  }

  nuevaMascota(mascota: IMascota) {
    return this.httpClient.post(environment.baseUrl + `/mascotas`, mascota);
  }

  editarMascota(mascota: IMascota) {
    return this.httpClient.put(
      environment.baseUrl + `/mascotas/${mascota.id}`,
      mascota
    );
  }
}
