import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-storico-movimenti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './storico-movimenti.component.html',
  styleUrl: './storico-movimenti.component.css'
})
export class StoricoMovimentiComponent {
onSubmit() {
throw new Error('Method not implemented.');
}

  searchTerm: string = '';
    selectedOption: string = '';
    selectedOptions: string[] = [];
    movements: any[] = [
        { id: 1, description: 'Movimento 1', amount: 100, date: '2017-01-01' },
        { id: 2, description: 'Movimento 2', amount: 200, date: '2017-01-02' },
        { id: 3, description: 'Movimento 3', amount: 300, date: '2017-01-03' },
        { id: 4, description: 'Movimento 4', amount: 400, date: '2017-01-04' },

    ]; 
    isChecked: boolean = false;
    options = [
        { label: 'Filiale', value: 'F' },
        { label: 'Internet', value: 'T' },
        // ... altre opzioni
    ];
    multiSelectOptions = [
        { label: '', value: '1' },
        { label: 'Scelta 2', value: '2' },
        { label: 'Scelta 3', value: '3' },
    ];

    onSearch() {
        // Implementa la logica di ricerca qui
        console.log('Termine di ricerca:', this.searchTerm);
        console.log('Opzione selezionata:', this.selectedOption);
        console.log('Opzioni selezionate:', this.selectedOptions);


        // Aggiorna la variabile 'movements' con i risultati della ricerca
        this.movements = [
            { id: 1, description: 'Movimento 1', amount: 100, date: '2017-01-01' },
            { id: 2, description: 'Movimento 2', amount: 200, date: '2017-01-02' },
            { id: 3, description: 'Movimento 3', amount: 300, date: '2017-01-03' },
            { id: 4, description: 'Movimento 4', amount: 400, date: '2017-01-04' },
        ];
    }
}
