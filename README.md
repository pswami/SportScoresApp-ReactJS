# SportScoresApp-ReactJS (Work in Progress)

NodeJS + ReactJS + Redux Stack



## Synopsis

The project is a web app that provides live sports scores. It is an attempt to replicate Yahoo Sports Mobile App into a React app. Still in progress.


## Motivation

The intention of this project was to practice React + Redux Architecture and build a simple, easy-to-use scores app with no ads and quick live updates.


## Usage

run `node server.js` and navigate to `http://localhost:3000`

or

go to `https://sport-scorecenter.herokuapp.com`

## Screenshots

![screen shot 2016-12-31 at 11 31 21 pm](https://cloud.githubusercontent.com/assets/7545796/21580518/ecf3c3ec-cfb1-11e6-9cee-adb9af563d46.png)
![screen shot 2016-12-31 at 11 33 26 pm](https://cloud.githubusercontent.com/assets/7545796/21580519/ecf42a6c-cfb1-11e6-924c-602d9f295383.png)


## API Reference (Yahoo Sports API)

### Base Path: `https://mrest.protrade.com/api/v7`

```
Title: Show games for given date
URL: /sport/nba/games?date=2016-12-25&tz=America%2FLos_Angeles
Method: GET
```

```
Title: Show player stats based on game id (can be found in above api)
URL: /game/nba.g.2016122513/playerStats
Method: GET
```

```
Title: Show game details
URL: /game/nba.g.2016122211/details
Method: GET
```

```
Title: Show game tweets
URL: /game/nba.g.2016122211/tweets?limit=30
Method: GET
```

```
Title: Show teams in specific sport
URL: /sport/nba/teams
Method: GET
```

```
Title: Show standings in specific sport
URL: /sport/nba/standingsTable
Method: GET
```

```
Title: Show specific team's schedule
URL: /team/nba.t.17/games?endDate=2017-02-01&startDate=2016-11-01&tz=America%2FLos_Angeles
Method: GET
```

```
Title: Show team's logo
URL: /team/nba.t.23/yslogo/192/192?failOnErr=true&forWhiteBG=true
Method: GET
```

```
Title: Show player photo
URL: /athlete/nba.p.5504/headshotCutout/160/120
Method: GET
```


## TODO

- Add Date Picker
- Make more responsive
- Add support for more sports
- Refactor Codebase and Stylesheet

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request
