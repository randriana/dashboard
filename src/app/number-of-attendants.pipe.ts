import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfAttendants'
})
export class NumberOfAttendantsPipe implements PipeTransform {

  transform(family: any, args?: number): string {
    const totalGuests = family.members.length;
    let attending = 0;
    for (let i = 0; i < totalGuests; i++) {
      if (family.members[i].attending) {
        attending++;
      }
    }
    return `${attending}/${totalGuests}`;
  }

}
