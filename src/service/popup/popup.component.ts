import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PopupType } from './popup.model';
import { environment } from 'src/environments/environment';
import { popupToClose } from './popup.config';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnInit {
  @Input({ required: true }) title = '';
  @Input({ required: true }) message = '';
  @Input({ required: true }) type: PopupType = PopupType.Success;

  ngOnInit(): void {
    setTimeout(() => {
      this.closePopup();
    }, popupToClose);
  }
  closePopup() {
    document.body.removeChild(document.querySelector('app-popup')!);
  }
}
