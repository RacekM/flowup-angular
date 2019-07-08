import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  slogan = 'Angular is cool';
  @Input() name = 'Unknown';

  method(s: string): string {
    return `:: ${s}`;
  }

  log() {
    console.log(Math.random());
  }

}
