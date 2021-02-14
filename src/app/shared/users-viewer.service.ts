import { Injectable } from '@angular/core';
import { UsersViewer } from './users-viewer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersViewerService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'https://localhost:44372/api/Users';
  list: UsersViewer[];

  loadList(){
    this.http.get(this.baseUrl).toPromise().then(
      res => this.list = res as UsersViewer[]
    );
  }

  UpdateUser(user: UsersViewer){

    return this.http.put(`${this.baseUrl}/${user.id}`, user);
  }

  

}
