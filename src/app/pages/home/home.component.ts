import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public promocaos = this.promocaoService.listar();
  public depoimentos = this.depoimentoService.listar();

  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService
  ) {}
}
