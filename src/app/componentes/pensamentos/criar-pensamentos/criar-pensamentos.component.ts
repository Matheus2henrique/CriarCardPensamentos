import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from './../pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert('Seu Pensamento esta sendo gerado')
    this.service.criar(this.pensamento).subscribe(() => {
    this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    alert("Pensamento cancelado");
    this.router.navigate(['/listarPensamento'])
  }

}
