import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList:any;
  constructor(private http:HttpClient) {
    this.http.get('https://627a890273bad506858b09ff.mockapi.io/api/State').subscribe((data) => {
      this.userList = data;
    })
  }

  ngOnInit(): void {
  }

}
