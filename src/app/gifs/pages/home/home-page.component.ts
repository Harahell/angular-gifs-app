import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private gifsService: GifsService) { }

  get Gifs(){
    return this.gifsService.gifList;
  }

}
