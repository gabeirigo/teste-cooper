import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from "rxjs";
import { Investimento } from "../models/investimento.model";


@Injectable({
  providedIn: 'root'
})
export class ListaInvestimentosService {

  readonly url = 'http://localhost:3000/investimentos';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Investimento[]> {
    return this.http.get<Investimento[]>(this.url);
  }

  findById(id: number): Observable<Investimento> {
    return this.http.get<Investimento>(`${this.url}/${id}`);
  }
}
