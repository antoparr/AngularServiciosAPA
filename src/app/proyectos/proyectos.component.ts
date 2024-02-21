import { Component } from '@angular/core';
import { AlertService } from '../servicio/alert.service';
import { Proyecto } from '../clases/proyecto.model';
import { ProyectoServicioService } from '../servicio/proyecto-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  input1: string = ''
  input2: string = ''
  public arrayProyecto: Proyecto[] = [];
  public proyecto: Proyecto = new Proyecto();
  public listaProyecto: Proyecto [] = new Array<Proyecto>
  constructor(private ruta: Router, private alerta: AlertService, private proyectoService: ProyectoServicioService){ // inyectar el servicio en el constructor de la clase
    console.log("Entro en el constructor de proyectos");
    this.proyecto = this.proyectoService.obtenerProyecto();
    this.arrayProyecto = this.proyectoService.obtenerListaProyectos();

  }

  enviarMensaje (mensaje: string) {
    this.alerta.mostrarMensaje(mensaje);
  }
  ngOnInit () {
    //this.enviarMensaje("ngOnInit de HomeComponent")
  }
  
  agregar () {
    this.proyecto.nombre = this.input1;
    this.proyecto.presupuesto = this.input2;
    this.proyectoService.crearProyecto(this.proyecto);

    // Navegar a otro componente por código.
    this.ruta.navigate(['']);
  }
}
