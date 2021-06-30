import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import MessageState from 'src/app/store/config/messageState';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.css']
})
export class ReceivedComponent implements OnInit {

  mensaje: string = '';
  valor:boolean = false;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {

    this.storeService.getState('messageState').subscribe((state: MessageState) => {
      this.mensaje = state.mensaje;
      this.valor = state.valor;
    });
  }

}
