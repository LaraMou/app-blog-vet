import { Component, OnInit } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dashboard-pwa';
  // Inyectamos el servicio de auth para el tema de la autentificacion
  constructor(
    public auth: AuthService,
    private updates: SwUpdate,
    private swPush: SwPush
  ) {}
  ngOnInit() {
    this.recargarChache();
  }
  recargarChache() {
    if (this.updates.isEnabled) {
      this.updates.available.subscribe((event) => {
        if (confirm('Hay una nueva versión disponible. ¿Quieres actualizar la app?')) {
          this.updates.activateUpdate().then(() => {
            window.location.reload();
          });
        }
      });
    }


  }

}
