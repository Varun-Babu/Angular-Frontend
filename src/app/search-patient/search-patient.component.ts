import { Component } from '@angular/core';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {

  name=""
  readValue = () =>
  {
    let data:any = { "name" : this.name}
    console.log(data)
  }
data=[]
}
