import { PessoaService } from "../../../services/pessoa.service";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Pessoa } from "src/app/models/Pessoa";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.css"],
})
export class ListarComponent implements OnInit {
  pessoas!: MatTableDataSource<Pessoa>;
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'idade', 'criadoEm'];

  constructor(private service: PessoaService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((pessoas) => {
      this.pessoas = new MatTableDataSource<Pessoa>(pessoas);
    });
  }
}