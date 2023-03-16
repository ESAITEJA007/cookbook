import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverInput') serverInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  onAddServer(nameInput : HTMLInputElement) { 
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.serverInput.nativeElement.value});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
}
}
