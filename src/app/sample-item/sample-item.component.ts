import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sample-item',
  templateUrl: './sample-item.component.html',
  styleUrls: ['./sample-item.component.scss']
})
export class SampleItemComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  /* ngOnInit - lifecycle hook, который вызывается один раз после установки свойств компонента,
  которые участвуют в привязке. Выполняет инициализацию компонента. Требует имплементации
  интерфейса onInit */

  ngOnInit(): void {
    /* сработал метод ngOnInit при инициализации компонента */
    console.log(`ngOnInit --- "name" = "${this.name}"`);
  }

}
