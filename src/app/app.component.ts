import { Component } from '@angular/core';
//import appTemplate from './app.component.html';

class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}

class Artist {
    name: string;
    country: string;

    constructor(name: string, country: string) {
        this.country = country;
        this.name = name;
    }
}

class Song {
    name: string;
    genre: string;

    constructor(name: string, genre: string) {
        this.genre = genre;
        this.name = name;
    }
}

class ArtistSong
{
    artist: Artist;
    song: Song;

    constructor(artist: Artist, song: Song) {
        this.artist = artist;
        this.song = song
    }
}

@Component({
    moduleId: module.id,
    selector: 'purchase-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    /* items: Item[] =
        [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    } */
    artists: Artist[] = 
    [
        {name: "Lil Peep", country: "USA"},
        {name: "Руслана Лижичко", country: "Ukraine"}
    ];

    songs: Song[] = 
    [
        {name: "Дикі Танці", genre: "Rock"},
        {name: "Hellboy", genre: "Emo-Rap"}
    ];

    summaries: ArtistSong[] = 
    [
        {artist: this.findArtist("Lil Peep"), song: this.findSong("Hellboy")},
        {artist: this.findArtist("Руслана Лижичко"), song: this.findSong("Дикі Танці")}
    ];

    findArtist(artistName: string) {
        return this.artists.find(a => a.name == artistName);
    }

    findSong(songName: string) {
        return this.songs.find(s => s.name == songName);
    }

    addArtist(artistName: string, artistCountry: string) {
        if (!artistName || !artistCountry) return;
        var newArtist: Artist = new Artist(artistName, artistCountry);
        if (!this.findArtist(newArtist.name)) this.artists.push(newArtist);
    }
    addSong(artistName: string, songName: string, songGenre: string) {
        if(!artistName || !songName || !songGenre) return;
        var newSong: Song = new Song(songName, songGenre);
        if (!this.findSong(newSong.name)) this.songs.push(newSong);
        this.summaries.push(new ArtistSong(this.findArtist(artistName), newSong));
    }
}
