import {
  Component, OnInit, ViewChild, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';
import { ChildComponent } from '../child/child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild(ChildComponent)
  childComponent: ChildComponent;
  textMessage: string;
  parentData: number;
  childData: number;
  status: string;
  public showChild = true;

  constructor() { }

  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
    console.log('ngOnInit Work!');
  }
  ngOnChanges() {
    
    console.log('OnChanges Work!');
  }
  ngDoCheck() {
    console.log(this.textMessage)
    console.log('DoCheck Work!');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit Work!');
  }
  ngAfterContentChecked() {
    if(this.textMessage == "B6008970"){
      this.status = "Your ID is OK";
    }else{
      this.status = "Error";
    }
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


  onClick2Child() {
    this.parentData += 1;

  }

  receiveData($event) {
    this.childData = $event;
  }
  onClickViewComponent() {
    this.childComponent.onClick2Parent();
  }
  update(){
    this.showChild = !this.showChild;
  }

}
