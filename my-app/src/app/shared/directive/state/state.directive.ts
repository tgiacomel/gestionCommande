import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input('appState') appState: State;
  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) { }
  ngOnChanges() {
    const elementNode = this._ElementRef.nativeElement;
    const cssClass = `state-${this.appState}`;
    const state = State;
    let texte: string;

    switch (this.appState) {
      case state.ALIVRER:
        texte = 'A Livrer';
        break;
      case state.ENCOURS:
        texte = 'En cours de Livraison';
        break;
      case state.LIVREE:
        texte = 'Commande Livrée';
        break;
      default :
        console.log(this.appState);
        break;
    }

    this._Renderer2.addClass(elementNode, cssClass);
    elementNode.textContent = texte;
  }
}
