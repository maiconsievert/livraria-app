import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/Http';
import { resultadoGenerico, resultadoGenericoSimples } from '../models/resultadoGenerico';
import { Livros } from '../models/livros';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LivrosServices {
    private baseUrl: string = "http://localhost:8080/api/livros";

    constructor(private http: Http) {

    }

    public getById(id: string): Observable<Livros> {
        return this.http.get(this.baseUrl + '/' + id)
            .map(res => res.json());
    }

    public lista(): Observable<Livros[]> {
        return this.http.get(this.baseUrl).map(res => res.json());
    }

    public post(livro: Livros): Observable<Livros> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl, JSON.stringify(livro), { headers: headers })
            .map(res => res.json());
    }

    public put(id: string, livro: Livros): Observable<Livros> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + id, JSON.stringify(livro), { headers: headers })
            .map(res => res.json());
    }

    public delete(id: string): Observable<Livros> {
        return this.http.delete(this.baseUrl + '/' + id)
            .map(res => res.json());
    }


}