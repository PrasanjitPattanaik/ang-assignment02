import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userFrom:FormGroup;

  constructor(private http:HttpClient, private route:ActivatedRoute) {
    this.userFrom = new FormGroup({
      'name' : new FormControl(''),
      'email' : new FormControl(''),
      'state' : new FormControl(''),
      'country' : new FormControl('')
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.getCurrentData(id).subscribe((data) => {
      this.userFrom.patchValue(data);
      console.log(data);
    })
  }

  putData(){
    //console.log(this.userFrom.value)
    let id = this.route.snapshot.params['id'];
    this.http.put("https://627a890273bad506858b09ff.mockapi.io/api/State/"+id,this.userFrom.value).subscribe((_data) => {
      alert('Data Updated successfully');
      window.location.reload();

    })

  }
  getCurrentData(id=this.route.snapshot.params['id']){
    return this.http.get("https://627a890273bad506858b09ff.mockapi.io/api/State/"+id);
  }
}
