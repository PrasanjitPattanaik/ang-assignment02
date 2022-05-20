import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userFrom:FormGroup;

  constructor(private http:HttpClient) {
    this.userFrom = new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'state' : new FormControl(''),
      'country' : new FormControl('')
    });
  }

  ngOnInit(): void {}


  postData(){
    //console.log(this.userFrom.value)
    this.http.post('https://627a890273bad506858b09ff.mockapi.io/api/State',this.userFrom.value).subscribe((data) => {
      alert('Data posted successfully');
      window.location.reload();
    })

  }

}
