import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../Model/contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  PostMessage(input: any){
    return this.http.get<Contact[]>(`${environment.apiUrl}/users`);
  }
}
