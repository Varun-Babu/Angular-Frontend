import { Component } from '@angular/core';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
name=""
age=""
department=""
doctor=""
date=""

readValue = () => {
  let data:any = {"name":this.name,"age":this.age,"department":this.department,"doctor":this.doctor,"date":this.date}
  console.log(data)
}


data = []


}
