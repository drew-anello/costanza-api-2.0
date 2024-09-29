# the Costanza API



### https://costanzaapi.up.railway.app/

This is a REST API that provides quotes from Seinfeld characters George and Frank Costanza. The API is built using Node.js, Express, and Postgres.

### Usage
To use the API, send a GET request to the following endpoint:

copy code
```
https://costanzaapi.up.railway.app
```
This will return all the quotes from George and Frank Costanza in JSON format:

```json
{
  "id": 1,
  "quote": "YOU HAVE NO EYE FOR FASHION!",
  "name": "Frank",
  "season": 6,
  "episode": 4
}
```

#### The quote schema includes the following properties:

<li>id: the unique identifier of the quote</li>
<li>quote: the text of the quote</li>
<li>name: the name of the character who said the quote</li>
<li>season: the season number of the episode where the quote was said</li>
<li>episode: the episode number of the episode where the quote was said</li>

## Contributing
Pull requests are welcome! If you find a bug or have an idea for a new feature, please open an issue to discuss it before submitting a pull request.

Acknowledgments
The quotes used in this API were sourced from the Seinfeld Quotes website, IMDB and many years of being a Seinfeld fan.


<p align="center">
  <img src="https://media.giphy.com/media/z5I5lQscZE8Za/giphy.gif" alt="George and Frank Costanza">
</p>
