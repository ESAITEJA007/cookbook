import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>()
  featureSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  constructor(private router: Router){

  }
  toHome(){
    this.router.navigate(['/']);
  }
}
