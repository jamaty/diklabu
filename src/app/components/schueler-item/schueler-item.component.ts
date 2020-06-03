import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schueler-item',
  templateUrl: './schueler-item.component.html',
  styleUrls: ['./schueler-item.component.scss'],
})
export class SchuelerItemComponent implements OnInit {
  @Input() vorname = '';
  @Input() nachname = '';
  @Input() image = '';

  constructor() { }

  ngOnInit() {}

}
