import { Component } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent {

  id!: number;
    post!: Post;

    constructor(
        public postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['postId'];

        this.postService.find(this.id).subscribe((data: Post) => {
        this.post = data;
        });
    }
}
