import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Post } from '../app.component';
import { DrinksService } from './drinks.service';
import { Drink } from './drinks.service';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Drink[] = [];

  constructor(private ds: DrinksService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ds.getDrinks().subscribe(drinks => {

      // this.posts = drinks["drinks"];
    });
  }


  getInfoById(id: string) {
    console.log("object", id)
    this.ds.getDrinksById(+id).subscribe(d => console.log(d))
  }

  openDialog() {
    this.dialog.open(DialogModalComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}

