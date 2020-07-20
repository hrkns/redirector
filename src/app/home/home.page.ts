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

    Browser
      .open({ url: 'https://sites.google.com/pwc.com/us-mx-pclde/home' });
  }
}
