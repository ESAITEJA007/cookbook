import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'cookbook';
  loadedFeature = 'recipe';
  serverElements = [
    { type: 'server', name: 'Test ENV', content: 'Test Env server' },
    { type: 'server', name: 'DEV ENV', content: 'DEV Env server' }
  ];
  submitted = false;
  userData = {
    first :  '',
    last :  ''
  }
  detailsForm : FormGroup;
  genders = ["Male","Female","None"]
  

  @ViewChild('f') formData : NgForm;
  ngOnInit(){
    this.detailsForm = new FormGroup({ 'uName': new FormControl(null), desc: new FormControl(null) }) ;
  }
  OnserverAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });   
  }

  OnBlueprintAdded(blueprintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
}
onNavigate(feature: string){
  this.loadedFeature = feature;
}
onSubmit(){
  this.userData.first = this.formData.value.fname;
  this.userData.last = this.formData.value.lname;
  this.submitted = true;
  this.formData.reset();

}
onSubmitDetails(){
   console.log(this.detailsForm);
}
}
