import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user.interface';

const USERS_DB_URL = '../../../assets/json-db/users.json'
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {


  constructor(private http : HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(USERS_DB_URL);
  }

  getuserById(userId: string, usersList: user[]) {
    let user = usersList.filter(user => user['Id'] == userId && user['Name'])
    return user[0]
  }
}
