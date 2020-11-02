import { Component } from '@angular/core';
import { NaloziService } from './nalozi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NaloziService]
})
export class AppComponent {
  title = 'Angular-Servisi'; 

  constructor(private naloziServis: NaloziService){}

  nalozi = [
    {
      ime: 'Pero Peric',
      status: 'aktivan'
    },
    {
      ime: 'Mitar Miric',
      status: 'neaktivan'
    },
    {
      ime: 'Skriven nalog',
      status: 'nepoznat'
    }
  ];

  onNalogDodat(noviNalog: {ime: string, status: string}) {
    this.nalozi.push(noviNalog);
  }

  onStatusPromjenjen(updateInfo: {id: number, noviStatus: string}) {
    this.nalozi[updateInfo.id].status = updateInfo.noviStatus;
  }

  //Otkomentarisati za primjer sa servisima
  //nalozi:{ime:string,status:string}[] = [];

  // ngOnInit(){
  //   this.nalozi = this.naloziServis.nalozi;
  // }
}
