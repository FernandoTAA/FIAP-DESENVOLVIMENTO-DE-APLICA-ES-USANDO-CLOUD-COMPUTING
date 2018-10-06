import { Component, OnInit } from '@angular/core';
import { Pessoa } from './model/pessoa';
import { PessoaService } from './services/pessoa.service';
import { map } from '../../node_modules/rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cadastro de Pessoa';

  pessoas: Pessoa[];

  cols: any[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas().toPromise().then(res => this.pessoas = res.rows);

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'dataNascimento', header: 'Data de Nascimento' },
      { field: 'rg', header: 'RG' },
      { field: 'cpf', header: 'CPF' }
    ];
  }
}
