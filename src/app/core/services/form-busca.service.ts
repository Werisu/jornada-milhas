import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Serviço que controla o formulário para ser injetado em todos os componentes onde há necessidade de manipulá-lo.
 * Porque fazer o serviço de formulário? Porque ele será usado em vários componentes diferentes.
 */
@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
    });
  }
}
