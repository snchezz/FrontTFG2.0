import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-inforabida',
  templateUrl: './inforabida.component.html',
  styleUrls: ['./inforabida.component.css']
})
export class InforabidaComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Erasmus+ | Información Rábida")

  }

}
