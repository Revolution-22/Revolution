import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PopupType } from './popup.model';

@Component({
  selector: 'app-popup',
  imports: [CommonModule],
  template: `
    <div class="popup">
      <div class="popup-content" [ngClass]="poTypeClass">
        <span class="close-btn" (click)="closePopup()">&times;</span>
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .popup-content {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        position: relative;
      }

      .popup-content.success {
        background-color: #d4edda;
        color: #155724;
        border: 2px solid #c3e6cb;
      }

      .popup-content.error {
        background-color: #f8d7da;
        color: #721c24;
        border: 2px solid #f5c6cb;
      }

      .popup-content.warn {
        background-color: #fff3cd;
        color: #856404;
        border: 2px solid #ffeeba;
      }

      .close-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
        font-size: 20px;
      }
    `,
  ],
})
export class PopupComponent {
  @Input() title = 'Popup Title';
  @Input() message = 'Popup Message';
  @Input() type: PopupType = PopupType.Success;

  get poTypeClass() {
    return this.type;
  }

  closePopup() {
    document.body.removeChild(document.querySelector('app-popup')!);
  }
}
