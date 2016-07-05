import { Component } from '@angular/core';
import { BoardComponent } from './components/board.component' 

@Component(
    {
        selector: 'my-app',
        templateUrl: 'app/app.component.html',
        directives : [ BoardComponent ]
    }
)
export class AppComponent { }