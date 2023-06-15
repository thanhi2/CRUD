import { Component } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  posts: Post[] = [];
  
  constructor(public PostService: PostService) { }
    
  ngOnInit(): void {
    this.PostService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }
    
  deletePost(id:number){
    this.PostService.delete(id).subscribe(res => {
        this.posts = this.posts.filter(item => item.id !== id);
        console.log('Post deleted successfully!');
    })
  }
}
