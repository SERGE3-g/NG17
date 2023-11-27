import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoricoMovimentiComponent } from './movimenti/storico-movimenti/storico-movimenti.component';
import { StoricoOrdineComponent } from './movimenti/storico-ordine/storico-ordine.component';
import { MovimentiDaRegolareComponent } from './sospesi/movimenti-da-regolare/movimenti-da-regolare.component';
import { OrdineInCorsoComponent } from './sospesi/ordine-in-corso/ordine-in-corso.component';

export const routes: Routes = [
{'path':'home',component:HomeComponent},
{'path':'navbar', component:NavbarComponent},
{'path':'storico-movimenti',component:StoricoMovimentiComponent},
{'path':'storico-ordine',component:StoricoOrdineComponent},
{'path':'movimenti-da-regolare',component: MovimentiDaRegolareComponent},
{'path':'ordine-in-corso',component:OrdineInCorsoComponent},
{'path':'',redirectTo:'home',pathMatch:'full'}
];
