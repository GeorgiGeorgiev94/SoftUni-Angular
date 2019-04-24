import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog';


const createDog = 'http://localhost:9999/feed/dog/create';
const getAllDogs ='http://localhost:9999/feed/dog';
const getSingleDog = 'http://localhost:9999/feed/dog/details/';
const deleteDog = 'http://localhost:9999/feed/dog/delete/';


@Injectable({
    providedIn: 'root'
  })
  export class DogService {
  
    constructor(private http: HttpClient) { }
  
    createDog(data) {
      return this.http.post(createDog, data);
    }
    getDog(id): Observable<Dog> {
      return this.http.get<Dog>(getSingleDog + id)
    }
    deleteDog(id) {
      return this.http.delete(deleteDog + id)
    }
    
  getAllDogs(): Observable<Array<Dog>> {
    return this.http.get<Array<Dog>>(getAllDogs)
  }
}