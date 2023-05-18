import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  title = 'Contacts Manager';
  search = signal('');

  onSearchUpdated(arg0: any) {
    this.search.set(arg0)
    this.router.navigate(['/'])
  }
}
