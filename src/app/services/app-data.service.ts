import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Film } from '../view-models/film';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {

    private films: Array<Film> = [
        { id: 1, name: 'The Matrix', imdbRating: 8.7 },
        { id: 2, name: 'The Terminator', imdbRating: 8.0 },
        { id: 3, name: 'RoboCop', imdbRating: 7.5 },
        { id: 4, name: 'Dogville', imdbRating: 8.0 },
        { id: 5, name: 'Antichrist', imdbRating: 6.6 },
        { id: 6, name: 'The Godfather', imdbRating: 9.2 },
        { id: 7, name: 'Pulp Fiction', imdbRating: 8.9 },
        { id: 8, name: 'Fight Club', imdbRating: 8.8 },
        { id: 9, name: 'Inception', imdbRating: 8.7 },
        { id: 10, name: 'Interstellar', imdbRating: 8.5 },
    ]

    constructor(private userService: UserService) {
        
    }

    createFilm(vm: Film): Observable<any> {
        let id = 0;
        this.films.forEach( f => {
            if(f.id >= id) {
                id = f.id + 1;
            }
        });
        vm.id = id;
        this.films.push(vm);
        return Observable.of(vm);
    }

    deleteFilm(id: number) {
        return Observable.of({}).delay(2000)
            .do(e => this.films.splice(this.films.findIndex( f => f.id == id), 1));
    }

    getFilms(): Observable<any> {
        return Observable.of(this.films);
    }

    getFilm(id: number): Observable<Film> {
        const film = this.films.find(f => f.id == id);
        return Observable.of(film);
    }

    updateCountry(updatedFilm: Film): Observable<any> {
        const film = this.films.find(f => f.id == updatedFilm.id);
        Object.assign(film, updatedFilm);
        return Observable.of(film).delay(2000);
    }

}
