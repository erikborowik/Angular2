import { Injectable, EventEmitter } from '@angular/core'

export class MessageService {
    public itemAdded$: EventEmitter<any>;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }



}