import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-datatable',
  templateUrl: 'datatable.component.html',
  styleUrls: ['datatable.component.css'],
})
export class DatatableComponent {
  rows: any = [];
  joke: string = 'knock knock';

  constructor() {
    this.fetch((data: any) => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}
