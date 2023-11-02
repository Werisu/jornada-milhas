import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  @Input() label = '';
  @Input() iconePrefix = '';

  ufs: UnidadeFederativa[] = [];

  control = new FormControl('');
  filteredOptions!: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}
  ngOnInit(): void {
    this.getUfs();
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  getUfs() {
    this.unidadeFederativaService.listar().subscribe({
      next: (value) => {
        this.ufs = value;
      },
    });
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();

    return this.ufs.filter((option) =>
      option.nome.toLowerCase().includes(filterValue)
    );
  }
}
