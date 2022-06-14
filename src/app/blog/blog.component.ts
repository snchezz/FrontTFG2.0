import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/modelos/tutorial.model';
import { TutorialService } from 'src/app/_services/tutorial.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  tutoriales?: Tutorial[];
  indiceActual = -1;
  titulo = '';

  @Input() viewMode = false;

  @Input() tutorialActual: Tutorial = {
    titulo: '',
    descripcion: '',
    publicado: false,
    imagen: ''
  };

  message = ''

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
    this.recuperarTutoriales();
  }

  //Metodo de Obtener Imagenes
  getTutorial(id: string): void {
    this.tutorialService.getTutorialPorId(id)
      .subscribe({
        next: (data) => {
          this.tutorialActual = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  //Metodo de Recuperar Tutoriales
  recuperarTutoriales(): void {
    this.tutorialService.getTodosTutoriales()
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }



  //Metodo de Buscar por Titulo
  buscarTitulo(): void {
    this.tutorialActual = {};
    this.indiceActual = -1;

    this.tutorialService.findByTitulo(this.titulo)
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}