import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RetrieverService {
  BASE_URL: string = 'http://localhost:3000/api';
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res) => res.json());
  }

  addEntry(entry) {
    console.log("entry", entry);
    return this.http.post(`${this.BASE_URL}`, entry)
      .map((res) => res.json());
  }
}
