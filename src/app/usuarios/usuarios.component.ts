import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ngOnInit(): void {
    // window.location.href = "https://luishuapayas.com/dashboard/index.html"
    window.location.href = "https://demoapplinks.netlify.app/"
    // document.addEventListener("DOMContentLoaded", () => {
    //   // window.location.href = "https://contabilidad.store/#/usuarios"
    //   // location.assign("https://contabilidad.store")
    //   setTimeout(function(){document.location.href = "https://contabilidad.store";},250);
    // });
  }
}
