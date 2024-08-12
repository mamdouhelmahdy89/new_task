import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyInterFace } from '../models/my-inter-face';


@Injectable({
  providedIn: 'root'
})
export class SingleProductService {

  
  Url = 'http://localhost:3000/commandes'

  constructor(private http:HttpClient) {}






 


}
