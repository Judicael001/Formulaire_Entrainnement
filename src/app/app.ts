import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. L'import indispensable

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // 2. On déclare l'outil pour le formulaire
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // 3. On crée l'objet qui va recevoir les données du formulaire
  utilisateur = {
    nom: '',
    prenom: '',
    sexe: '',
    fonction: ''
  };

  // 4. La liste pour ton menu déroulant
  fonctions: string[] = [
    'Développeur', 
    'Médecin', 
    'Commercial', 
    'Monéticien', 
    'Comptable'
  ];

  estValide: boolean = false;

  // 5. La méthode appelée quand on clique sur le bouton
  valider() {
    this.estValide = true; // pour afficher les données après validation
  };

  modifier() {
    this.estValide = false; // pour revenir au formulaire après modification
  }
}
