import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { HighlightDirective } from './directives/directive';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService, HighlightDirective]
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private weatherService: WeatherService, 
    private auth: AuthService,
    private titleService : Title) {
    /*
    weatherService.getWeather()
      .then(
        (dados) => this.getDadosWeather(dados)
      ).catch(
        (erro) => this.getDadosWeatherError(erro)
      );*/
  };

  public getDadosWeather(dados) {
    console.log(dados);
  }

  public getDadosWeatherError(dados) {
    console.log(dados);
  }

  isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  logOut() {
    localStorage.removeItem("token");
  }

  ngOnInit() {
    this.titleService.setTitle("Home");
  }

}
