import { Component } from '@angular/core';
import * as Themes from './app.theming';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {
    Themes.ThemConfig.setTheme(Themes.Green_Theme);
  }
  setGreenTheme() {
    Themes.ThemConfig.setTheme(Themes.Green_Theme);
  }
  setRedTheme() {
    Themes.ThemConfig.setTheme(Themes.Red_Theme);
  }
}
