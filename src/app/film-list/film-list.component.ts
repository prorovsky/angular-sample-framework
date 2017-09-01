import { Component, OnInit } from '@angular/core';
import { Film } from '../view-models/film';
import { AppDataService } from '../services/app-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

    allFilms: Array<Film>;
    count = 0;
    films: Array<Film>;

    constructor(
        private dataService: AppDataService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.dataService.getFilms().subscribe(
            films => {
                this.allFilms = films;

                this.count = this.route.snapshot.params['count'];
                this.updateList();
            }
        );

        this.route.params.subscribe(params => {
            this.count = params['count'];
            this.updateList();
        });
    }

    updateList() {
        this.films = this.count > 0 ? this.allFilms.slice(0, this.count) : this.allFilms;
    }

}
