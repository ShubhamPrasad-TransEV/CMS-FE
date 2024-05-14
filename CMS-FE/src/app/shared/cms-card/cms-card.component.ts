import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cms-card',
  templateUrl: './cms-card.component.html',
  styleUrls: ['./cms-card.component.scss']
})
export class CmsCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() styleClass: string = '';
}
