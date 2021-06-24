import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './../models/Pessoa';

@Injectable({
    providedIn: 'root'
})

export class PessoaService {

    private baseURL= "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    listar(): Observable<Pessoa[]>{
        return this.http.get<Pessoa[]>(`${this.baseURL}pessoa/listar/`);
    }

    cadastrar(pessoa: Pessoa): Observable<Pessoa>{
        return this.http.post<Pessoa>(`${this.baseURL}pessoa/cadastrar`, pessoa);
      }
    
}