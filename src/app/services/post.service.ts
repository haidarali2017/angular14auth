import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/posts/'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPosts(page: number, pageSize: number): Observable<any> {
 
    const url = `${this.baseUrl}?page=${page}&pageSize=${pageSize}`;
    // console.warn('data',url);
    return this.http.get(url);
  }


  
}
