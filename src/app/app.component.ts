import { WeatherService } from './services/weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
  title = 'app works!';
  
  constructor(private weatherService: WeatherService) {
    weatherService.getWeather()
      .then(
          (dados) => console.log(dados)
      );
  }
  
}
