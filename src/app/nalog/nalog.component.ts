import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {LogovanjeService} from '../logovanje.service';
import { NaloziService  } from "../nalozi.service";
 
@Component({
  selector: 'app-nalog',
  templateUrl: './nalog.component.html',
  styleUrls: ['./nalog.component.css']
})
export class NalogComponent implements OnInit {
  @Input() dodatNalog: {ime:string, status:string};
  @Input() id: number;
  @Output() statusPromjenjen = new EventEmitter<{id:number, noviStatus:string}>();

  constructor(private logovanjeServisa: LogovanjeService,
              private naloziServis: NaloziService) { }

  ngOnInit(): void {
  }

  onPodesiStatus(status:string){
    this.statusPromjenjen.emit({id: this.id, noviStatus: status});
    this.logovanjeServisa.logStatusPromenjen(status);
  }

  //Otkomentarisati za primjer sa servisima
  // onPodesiStatus(status:string){
  //   this.naloziServis.promjeniStatus(this.id, status);    
  // }
}
