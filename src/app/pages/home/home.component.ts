import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public promocaos = this.promocaoService.listar();

  constructor(private promocaoService: PromocaoService) {}

  ngOnInit(): void {}
}
