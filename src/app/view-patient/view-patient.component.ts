import { Component } from '@angular/core';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  data=[
    {"name":"Test1","age":1,"doctor":"Dr.test1"},
    {"name":"Test2","age":2,"doctor":"Dr.test12"},
    {"name":"Test3","age":3,"doctor":"Dr.test123"},
    {"name":"Test4","age":4,"doctor":"Dr.test1234"},
    {"name":"Test5","age":5,"doctor":"Dr.test12345"}
  ]

}
