import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

    console.log('123', 123);

    Browser
      .open({ url: 'http://google.com/' })
      .then(a => {

        console.log('a', a);
      })
      .catch(b => {

        console.log('b', b);
      });
  }

  ngOnInit() {
  }
}
