import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tecnica-link',
  templateUrl: './tecnica-link.component.html',
  styleUrls: ['./tecnica-link.component.scss']
})
export class TecnicaLinkComponent {
  @Input() tituloPrincipal: string = '';
  @Input() tituloTraducao: string = '';
  @Input() dataId: string = ''; 

  @Output() linkHover = new EventEmitter<string>();
  @Output() linkClick = new EventEmitter<string>();

  isActive: boolean = false;

  onMouseEnter(): void {
    this.isActive = true;
    this.linkHover.emit(this.dataId);
  }

  onMouseLeave(): void {
    this.isActive = false;
    this.linkHover.emit('');
  }

  onClick(event: Event): void {
  event.preventDefault();
  console.log('Componente filho:', this.dataId, 'emitiu um clique.');
  this.linkClick.emit(this.dataId);
}
}