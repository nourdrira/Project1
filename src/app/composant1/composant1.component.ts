import { Component } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component {
  message = 'Ce message provient du composant 1 !';
}
