import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importiere Router und RouterModule

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [RouterModule], // Importiere das RouterModule
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'] // Nutze styleUrls (mit s)
})
export class StartScreenComponent {
  constructor(private router: Router) {} // Hier wird der Router korrekt verwendet

  newGame() {
    this.router.navigateByUrl('/game');
  }
}