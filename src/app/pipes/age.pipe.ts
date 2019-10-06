import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dob: string, flag?: number): any {
    if(!dob) {
      return '';
    }
    let date1 = new Date(dob);
    let difference: any = Date.now() - date1.getTime();
    let date2 = new Date(difference);
    let year = date2.getFullYear() - 1970;
    let month = date2.getMonth();
    let days = date2.getDate();
    let age = '';
    if(flag === 2) {
      age = `${year} years and ${month}  months`;
    } else if(flag === 3) {
      age = `${year} years, ${month}  months and ${days} days`;
    } else if (flag === 1) {
      age = `${year} years`;
    }
    return age;
  }

}
