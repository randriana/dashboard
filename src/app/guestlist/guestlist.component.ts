import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guestlist = [];

  constructor(public backend: BackendService) { }

  ngOnInit() {
    this.backend.getGuestlist().subscribe((guestList) => {
      this.guestlist = guestList;
    });
  }

  showSubRow(guest) {
    guest.showSubRow = guest.showSubRow ? false : true;
  }
}
