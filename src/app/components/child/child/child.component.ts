import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() parentData: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData: number;

  constructor() { }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit Work!');
  }
  ngOnChanges() {
    
    console.log('OnChanges Work!');
  }
  ngDoCheck() {
    console.log('DoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit Work!');
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked Work!');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit Work!');
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked Work!');
  }
  ngOnDestroy() {
    console.log('OnDestroy Work!');
  }
  onClick2Parent() {

    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

}