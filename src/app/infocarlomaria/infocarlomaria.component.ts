import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-infocarlomaria',
  templateUrl: './infocarlomaria.component.html',
  styleUrls: ['./infocarlomaria.component.css']
})
export class InfocarlomariaComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Erasmus+ | Información Carlo Maria")
  }

}
