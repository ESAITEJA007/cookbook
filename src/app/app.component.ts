import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cookbook';
  loadedFeature = 'recipe';
  serverElements = [
    { type: 'server', name: 'Test ENV', content: 'Test Env server' },
    { type: 'server', name: 'DEV ENV', content: 'DEV Env server' }
  ];
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
}
