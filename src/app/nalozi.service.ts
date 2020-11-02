import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {LogovanjeService} from './logovanje.service';

@Injectable({
  providedIn: 'root'
})
export class NaloziService {

  constructor(private logovanjeServisa: LogovanjeService) { }

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

  dodajNalog(ime:string, status:string){
    this.nalozi.push({ime:ime, status:status});
    this.logovanjeServisa.logStatusPromenjen(status);
  }
  
  promjeniStatus(id:number, status: string){
    this.nalozi[id].status = status;
    this.logovanjeServisa.logStatusPromenjen(status);
  }
  
}
