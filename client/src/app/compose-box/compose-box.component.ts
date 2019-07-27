import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../interfaces/post";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-compose-box",
  templateUrl: "./compose-box.component.html",
  styleUrls: ["./compose-box.component.scss"]
})
export class ComposeBoxComponent implements OnInit {
  @Output() post = new EventEmitter<FormData>();

  public photosToUpload: File[];
  imgSrc: any[] = [];
  public description = "";
  public notUploaded: boolean = true;
  constructor() {}

  ngOnInit() {}

  handleFileInput(files) {
    console.log(files);
    for (let i in files) {
      console.log(files[i]);
      this.photosToUpload.push(files[i]);
    }
    this.photosToUpload = files;
    this.notUploaded = !this.notUploaded;

    for (let i = 0; i < this.photosToUpload.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(this.photosToUpload[i]);
      reader.onloadend = (event: any) => {
        console.log(event);
        this.imgSrc.push(event.target.result);
        console.log(this.imgSrc);
      };
    }
  }

  deleteFileInput() {}

  submitForm(event) {
    const formData = new FormData();
    if (!this.photosToUpload) {
      return;
    }
    for (let i = 0; i < this.photosToUpload.length; i++) {
      const file = this.photosToUpload[i];
      formData.append("photo" + i, file);
    }
    formData.append("description", this.description);
    this.post.next(formData);
  }
}
