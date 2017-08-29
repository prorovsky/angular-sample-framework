import { Component, OnInit } from '@angular/core';
import { Film } from '../view-models/film';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { FieldDefinition } from '../../fw/dynamic-form/field-definition';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

    film: Film;
    filmDefinition: Array<FieldDefinition> = [
        {
            key: 'id',
            type: 'number',
            isId: true,
            label: 'Id',
            required: true
        },
        {
            key: 'name',
            type: 'string',
            isId: false,
            label: 'Film Name',
            required: true
        },
        {
            key: 'imdbRating',
            type: 'number',
            isId: false,
            label: 'IMDB Rating',
            required: true
        },
        {
            key: 'poster',
            type: 'image',
            isId: false,
            label: 'Poster',
            required: false
        }
    ];
    errorMessage: string;
    operation: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: AppDataService
    ) { }

    ngOnInit() {
        this.operation = this.route.snapshot.params['operation'];
        if (this.operation === 'create') {
            this.film = { id: 0, name: "", imdbRating: null };
        }
        else {
            const filmId = this.route.snapshot.params['id'];
            this.dataService.getFilm(filmId)
                .subscribe((film: Film) => {
                    this.film = film;
                });
        }
    }

    createFilm(film: Film) {
        film.id = 0;
        this.errorMessage = null;
        this.dataService.createFilm(film).subscribe(
            f => this.router.navigate(['/authenticated/film-maint']),
            err => this.errorMessage = 'Error creating film'
        );
    }

    updateFilm(film: Film) {
        this.errorMessage = null;
        this.dataService.updateFilm(film).subscribe(
            f => this.router.navigate(['/authenticated/film-maint']),
            err => this.errorMessage = 'Error updating film'
        );
    }
}
