import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      // window.location.href = "https://contabilidad.store/#/usuarios"
      location.assign("https://contabilidad.store")
    });
  }
}
