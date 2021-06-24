import { PessoaService } from "../../../services/pessoa.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Pessoa } from "../../../models/Pessoa";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {

  nome!: string;
  cpf!: string;
  idade!: number;

  constructor(private service: PessoaService, private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void { 

  }

  cadastrar(): void {
    let pessoa = new Pessoa();
    pessoa.nome = this.nome;
    pessoa.cpf = this.cpf;
    pessoa.idade = this.idade;
    this.service.cadastrar(pessoa).subscribe(pessoa => {
      console.log(pessoa);
      this.snack.open("Pessoa cadastrada", "Pessoa", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      }) ;
      this.router.navigate([""]);
    })
  }
}