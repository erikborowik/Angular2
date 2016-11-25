import { Injectable, EventEmitter } from '@angular/core'

export class SessionService {
    public itemAdded$: EventEmitter<any>;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }



}