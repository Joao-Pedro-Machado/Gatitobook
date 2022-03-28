import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesage',
  templateUrl: './mesage.component.html',
  styleUrls: ['./mesage.component.css']
})
export class MesageComponent implements OnInit {

  @Input() mesage = ''

  constructor() { }

  ngOnInit(): void {
  }

}
