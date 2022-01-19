import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'colorfulText'
})
export class ColorfulTextPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer)
  {}

  transform(value: string): any {
    const colors = [
      "#16A085",
      "#9B59B6",
      "#27AE60",
      "#8E44AD",
      "#2C3E50",
      "#C0392B"
    ];
    const letters = value.split("");
    let str = "";

    for (let letter of letters) {
      const color = colors[this.getRandomInt(colors.length)];
      str += `<b style="color: ${color}">${letter}</b>`;
    }

    return this.sanitizer.bypassSecurityTrustHtml(str);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
