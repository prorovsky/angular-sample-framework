import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Film } from '../view-models/film';

@Component({
    selector: 'app-film-maint',
    templateUrl: './film-maint.component.html',
    styleUrls: ['./film-maint.component.css']
})
export class FilmMaintComponent implements OnInit {

    films: Array<Film>;
    deleteError: string;
    deleteId: number;
    isDeleting = false;

    constructor(
        private dataService: AppDataService,
        private router: Router
    ) {
        dataService.getFilms().subscribe(data => this.films = data);
    }

    ngOnInit() {
    }

    cancelDelete() {
        this.isDeleting = false;
        this.deleteId = null;
    }

    createFilm() {
        this.router.navigate(['/authenticated/film-detail', 0, 'create']);
    }

    deleteFilm(id: number) {
        this.isDeleting = true;
        this.dataService.deleteFilm(id).subscribe(
            f => this.cancelDelete(),
            err => { this.deleteError = err; this.isDeleting = false; }
        );
    }

    deleteFilmQuestion(id: number) {
        this.deleteError = null;
        this.deleteId = id;
    }

    editFilm(id: number) {
        this.router.navigate(['/authenticated/film-detail', id, 'edit']);
    }

    showFilmDetail(id: number) {
        this.router.navigate(['/authenticated/film-detail', id, 'details']);
    }
}
