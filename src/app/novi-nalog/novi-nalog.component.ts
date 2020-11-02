import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {LogovanjeService} from '../logovanje.service';
import { NaloziService } from "../nalozi.service";

@Component({
  selector: 'app-novi-nalog',
  templateUrl: './novi-nalog.component.html',
  styleUrls: ['./novi-nalog.component.css']
})
export class NoviNalogComponent implements OnInit {
  @Output() nalogDodat = new EventEmitter<{ime:string, status:string}>();

  nalozi = [];

  constructor(private logovanjeServisa: LogovanjeService,
    private naloziServis: NaloziService) { }

  ngOnInit(): void {
  }

  OnDodajNalog(imeNaloga:string,statusNaloga:string){
    this.nalogDodat.emit({
      ime:imeNaloga,
      status:statusNaloga      
    }) 
    this.logovanjeServisa.logStatusPromenjen(statusNaloga);   
  }

  //Otkomentarisati za primjer sa servisima
  // OnDodajNalog(imeNaloga:string,statusNaloga:string){
  //   this.naloziServis.dodajNalog(imeNaloga, statusNaloga);
  // }

}
