import { Component, OnInit } from '@angular/core'
import { ObservableMedia } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'nga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  _displayAccountIcons = false

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public media: ObservableMedia
  ) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/img/icons/service.svg')
    )
  }

  ngOnInit() {
    this._displayAccountIcons = true
    // this.authService.authStatus.subscribe(authStatus => {
    //   setTimeout(() => {
    //     this._displayAccountIcons = authStatus.isAuthenticated
    //   }, 0)
    // })
  }

  get displayAccountIcons() {
    return this._displayAccountIcons
  }
}
