import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;

  constructor(public fomrBuilder:FormBuilder) { }

  ngOnInit() {

    this.formComanda = this.fomrBuilder.group({
      inChopp : this.fomrBuilder.control(''),
      inPizzas : this.fomrBuilder.control(''),
      inRecheios : this.fomrBuilder.control(''),
      inPessoas : this.fomrBuilder.control(''),
      inServico : this.fomrBuilder.control(true)

    })
  }
  onProcessar(){
    let inChopp = this.formComanda.value.inChopp; 
    let inPizzas = this.formComanda.value.inPizzas;
    let inRecheios = this.formComanda.value.inRecheios;
    let inPessoas = this.formComanda.value.inPessoas;
    let inServico = this.formComanda.value.inServico;

    let cons = (7.30*inChopp + 31.50*inPizzas + 5.90*inRecheios)
    let serv = 0

    if(inServico){
      serv = (cons*0.10)     
    }
    
    let total = cons + serv
    let calcpess = total / inPessoas

    alert("Consumo: " + cons.toFixed(2)
      + "\nServiços: " + serv.toFixed(2)
      + "\nTotal: " + total.toFixed(2)
      + "\nPor Pessoa: " + calcpess.toFixed(2))
  }

}
