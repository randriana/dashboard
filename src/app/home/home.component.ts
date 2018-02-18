import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stats = null;
  openModal = false;
  data = null;

  constructor(public backend: BackendService) { }

  ngOnInit() {
    this.backend.getStats().subscribe((data) => {
      this.stats = data;
    });
  }

  showModal(id: number) {
      switch (id) {
        case 1: this.getGuestList(); break;
        case 2: this.getOpenedInvites(); break;
        case 3: this.getRSVPs(); break;
      }
    this.openModal = true;
  }

  closeModal() {
    this.data = null;
    this.openModal = false;
  }

  getOpenedInvites() {
    this.backend.getOpenedInvites().subscribe( ( data ) => {
      this.data = data;
    } );
  }

  getGuestList() {
    this.backend.getAnsweredGuests().subscribe( ( data: [any] ) => {
      this.data = this._getMemberList( data );
    } );
  }

  getRSVPs() {
    this.backend.getAnsweredGuests().subscribe( ( data: [any] ) => {
      this.data = data;
    } );
  }

  _getMemberList( data ) {
    const list = [];

    data.forEach( ( family ) => {
      family.members.forEach( ( member ) => {
        if ( member.attending ) {
          list.push( member );
        }
      } );
    } );
    return list;
  }
}
