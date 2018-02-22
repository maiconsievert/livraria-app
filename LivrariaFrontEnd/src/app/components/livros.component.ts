import { Component, OnInit } from '@angular/core';
import { LivrosServices } from '../services/livros.services';
import { Livros } from '../models/livros';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'livros',
    templateUrl: 'livros.component.html'
})


export class LivrosComponent {
    public livros: Livros[] = [];
    public modoEditar: boolean = false;
    public itemEditarAtual: Livros;
    public tituloLabel: string = "Adicionar";

    form: FormGroup;
    
    constructor(private service: LivrosServices) {
        this.itemEditarAtual = new Livros();
    }

    public inicio(): void {
        this.itemEditarAtual = new Livros();
        this.modoEditar = false;
        this.form.reset();
    }

    public editar(livro: Livros): void {
        this.itemEditarAtual = livro;
        this.modoEditar = true;
        this.tituloLabel = "Editar";
    }


    public cancelar(): void {
        this.itemEditarAtual = new Livros();
        this.modoEditar = false;
        this.form.reset();
    }

    public salvar(): void {
        if (!this.modoEditar) {
            this.salvarNovoLivro();
        }
        else {
            this.atualizarLivro();
        }
    }


    public salvarNovoLivro(): void {
        this.service.post(this.itemEditarAtual)
            .subscribe((res) => {
                this.livros.push(res);
                this.itemEditarAtual = new Livros();
                this.modoEditar = false;
                this.form.reset();
            });
    }

    public atualizarLivro(): void {
        
        this.service.put(this.itemEditarAtual._id, this.itemEditarAtual)
            .subscribe((res) => {
                this.itemEditarAtual = new Livros();
                this.modoEditar = false;
                this.tituloLabel = 'Adicionar';
                this.form.reset();
        })
    }

    public excluir(id: string): void {
        this.service.delete(id)
            .subscribe((res) => {
                this.carregarLivros();
            });
    }

    private carregarLivros(): void {
        this.livros = [];
        this.service.lista()
            .subscribe((res) => {
                this.livros = res;
                //if (res.sucesso) {
                
                //} else {
                
                //}
            });
    }

    public ngOnInit() {

        this.form = new FormGroup({            
          });
        
        this.carregarLivros();
    }

    ngOnChanges() {
        this.form.reset({
          
        });
      }

    onSubmit() {
        
    }


}
