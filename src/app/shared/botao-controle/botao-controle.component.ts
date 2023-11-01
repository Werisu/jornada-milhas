import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
})
export class BotaoControleComponent {
  @Input({ required: true }) operacao = '';
}
