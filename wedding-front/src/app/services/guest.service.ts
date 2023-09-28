import { Injectable } from '@angular/core';
import { Guest } from '../models/Guest';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GuestService {

  private _guests: BehaviorSubject<Guest[]>;

  private dataStore: {
    guests: Guest[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { guests: [] };
    this._guests = new BehaviorSubject<Guest[]>([]);
  }

  get guests(): Observable<Guest[]> {
    return this._guests.asObservable();
  }

  addGuest(guest: Guest): Promise<Guest> {
    return new Promise((resolver, reject) => {
      guest.id = this.dataStore.guests.length + 1;
      this.dataStore.guests.push(guest);
      this._guests.next(Object.assign({}, this.dataStore).guests);
      resolver(guest);
    })
  }

  guestById(id: number) {
    return this.dataStore.guests.find(x => x.id == id);
  }

  loadAll() {
    // const guestsUrl = 'https://'

    // return this.http.get<Guest[]>(guestsUrl)
    //   .subscribe(data => {
    //     this.dataStore.guests = data;
    //     this._guests.next(Object.assign({}, this.dataStore).guests);
    //   }, error => {
    //     console.log("Failed to fetch guests")
    //   });

    //Add some dummy data
    this._guests.next([
        {
            id:1,
            name: "Nea Dinu",
            email: "nenea.dinu@yami.ro",
            allergies:"",
            foodPref: "",
        },
        {
            id:2,
            name: "Coana Diana",
            email: "dianutza.conicica@goagle.cam",
            allergies:"Alune",
            foodPref: "Vegetarian",
        },
        {
            id:3,
            name: "Gigu Mojicu",
            email: "",
            allergies:"Oua, Gluten",
            foodPref: "Vegan",
        },
    ])
  }

}
