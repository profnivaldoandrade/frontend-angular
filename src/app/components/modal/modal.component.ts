import { Component, ElementRef, Input, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @ViewChild('modal', { static: true }) modalElement!: ElementRef;

  private modalInstance!: any;

  ngAfterViewInit(): void {
    this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
  }

  showModal(): void {
    this.modalInstance.show();
    setTimeout(() => this.modalInstance.hide(), 2000);
  }

  hideModal(): void {
    this.modalInstance.hide();
  }
}
