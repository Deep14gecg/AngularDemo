import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { BlogAdminService } from '../adminShared/blog-admin.service';
import { Blog } from '../adminShared/blog';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  imgTitle : string ;
  imageSRC : string;
  postTitle : string;
  content : string;
  post : Blog;

  constructor(private blogAdminSVC : BlogAdminService, private router : Router ) { }

  fileLoad($event : any) {
    let myReader : FileReader = new FileReader();
    let file : File = $event.target.files[0];
    this.imgTitle = file.name;
    myReader.readAsDataURL(file);

    myReader.onload = (e : any) => {
      this.imageSRC = e.target.result;
    }
  }

  createPost(){
    this.post = new Blog(
      this.postTitle,
      this.content,
      this.imgTitle,
      this.imageSRC.substring(23)
    );

    this.blogAdminSVC.createPost(this.post);
    alert(`${this.postTitle} added to posts `);
    this.router.navigate(['/admin']);
  }

  cancel(){
    this.router.navigate(['/admin']);
  }



  ngOnInit() {
  }

}
