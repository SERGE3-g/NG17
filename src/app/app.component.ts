import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule,]
})
export class AppComponent {
  title = 'NG17';
  brand: any;
  //brandImage: any;
  //cioa: any;
}
