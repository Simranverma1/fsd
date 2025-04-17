// src/app/app.component.ts
import { Component }      from '@angular/core';
import { RouterOutlet }   from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,          // ← make it standalone
  imports: [ RouterOutlet ], // ← so <router-outlet> works
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}
