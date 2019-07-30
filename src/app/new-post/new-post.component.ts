import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../model/Post.model';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.postForm = this.formBuilder.group(
      {
        titre:  ['', Validators.required],
        contenu: ['', Validators.required],
      }
    );

  }


  onSubmitForm() {
    const formValue = this.postForm.value;
    console.log(formValue);
    this.postService.addPost(formValue['titre'], formValue['contenu']);
    this.postService.savePostService();
    this.postService.emitPosts();
    this.router.navigate(['/posts']);
  }
}


