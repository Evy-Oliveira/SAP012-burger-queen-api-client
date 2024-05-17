import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [MatButtonModule],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() bold!: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  click(){
    this.onClick.emit();
  }

}
