import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogovanjeService {

  constructor() { }

  logStatusPromenjen(status: string) {
    console.log('Status servera promenjen, novi status je ' + status);
}
}
