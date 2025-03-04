import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupComponent } from './popup.component';
import { PopupType } from './popup.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
        const PopupElement = createCustomElement(PopupComponent, { injector });
        if (!customElements.get('app-popup')) {
          customElements.define('app-popup', PopupElement);
        }   
    }
  }

  showPopup(title: string, message: string, type: PopupType) {
    const popupElement = document.createElement('app-popup');
    popupElement.setAttribute('title', title);
    popupElement.setAttribute('message', message);
    popupElement.setAttribute('type', type);
    document.body.appendChild(popupElement);
  }
}
