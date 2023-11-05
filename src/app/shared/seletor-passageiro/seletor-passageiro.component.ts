import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input({ required: true }) titulo: string = '';
  @Input({ required: true }) subtitulo: string = '';

  value: number = 0;
  onChange = (value: number) => {};
  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
