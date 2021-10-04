import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { first } from 'rxjs/operators';
import { Album } from 'src/app/models/album';
@Component({
  selector: 'app-create-edit-album',
  templateUrl: './create-edit-album.component.html',
  styleUrls: ['./create-edit-album.component.scss'],
})
export class CreateEditAlbumComponent implements OnInit {
  albumForm!: FormGroup;
  id!: number;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  albums: Album[] = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.getAlbumById(params.albumId);
    });


    this.isAddMode = !this.id;

    this.albumForm = this.fb.group({
      title: ['', Validators.required],
    });

    if (!this.isAddMode) {
      this.albumsService
        .getAlbumByUserId(this.id)
        .pipe(first())
        .subscribe((a) => this.albumForm.patchValue(a));
    }

    // this.route.queryParams.subscribe(params => this.getAlbumByUserId(params.userId));
  }

  getAlbumByUserId(userId: number) {
    this.albumsService.getAlbumByUserId(userId).subscribe((albumList) => {
      this.albums = albumList;
    });
  }

  getAlbumById(albumId:number){
    this.albumsService.getAlbum(albumId)
    .subscribe(album => {
      this.albumForm.patchValue(album);
    })
  }

  get f() {
    return this.albumForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // // stop here if form is invalid
    if (this.albumForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createAlbum();
    } else {
      this.updateAlbum();
    }
  }

  private createAlbum() {
    this.albumsService
      .createAlbum(this.albumForm.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  private updateAlbum() {
    this.albumsService
      .updateAlbumUserId(this.id, this.albumForm.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }
}
