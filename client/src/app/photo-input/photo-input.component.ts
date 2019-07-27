import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-photo-input",
  templateUrl: "./photo-input.component.html",
  styleUrls: ["./photo-input.component.scss"]
})
export class PhotoInputComponent implements OnInit {
  @Output() photo = new EventEmitter<FormData>();

  img: string;

  constructor() {}

  ngOnInit() {}
}
