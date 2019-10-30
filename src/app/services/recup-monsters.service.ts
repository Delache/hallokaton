import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecupMonstersService {

  static URL = "https://hackathon-wild-hackoween.herokuapp.com"

  constructor(private http: HttpClient) { }

  getAllMonsters() {
    return this.http.get(RecupMonstersService.URL+"/monsters")
  }

}
