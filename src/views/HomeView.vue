<template>
  <section id="home">
    <div class="p-2 flex flex-col">
      <div
        class="title text-xl font-montserrat font-extrabold text-left text-white mb-2"
      >
        New on Netflix
      </div>
      <div class="movie-list flex overflow-y-scroll">
        <template v-for="(movie, i) in movies" :key="movie.Year + i">
          <movie-card :movie="movie" />
          <movie-card :movie="movie" />
          <movie-card :movie="movie" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MovieList, MovieCard } from "@/components/movie";
import { ref } from "vue";

const movies = ref([
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    Rated: "PG",
    Released: "25 May 1977",
    Runtime: "121 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "George Lucas",
    Writer: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    Language: "English",
    Country: "USA",
    Awards: "Won 6 Oscars. Another 50 wins & 28 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "93%",
      },
      {
        Source: "Metacritic",
        Value: "90/100",
      },
    ],
    Metascore: "90",
    imdbRating: "8.6",
    imdbVotes: "1,092,532",
    imdbID: "tt0076759",
    Type: "movie",
    DVD: "21 Sep 2004",
    BoxOffice: "N/A",
    Production: "20th Century Fox",
    Website: "http://www.starwars.com/episode-iv/",
    Response: "True",
  },
  {
    Title: "Star Wars: Episode IV - A New Hope",
    Year: "1977",
    Rated: "PG",
    Released: "25 May 1977",
    Runtime: "121 min",
    Genre: "Action, Adventure, Fantasy, Sci-Fi",
    Director: "George Lucas",
    Writer: "George Lucas",
    Actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    Language: "English",
    Country: "USA",
    Awards: "Won 6 Oscars. Another 50 wins & 28 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.6/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "93%",
      },
      {
        Source: "Metacritic",
        Value: "90/100",
      },
    ],
    Metascore: "90",
    imdbRating: "8.6",
    imdbVotes: "1,092,532",
    imdbID: "tt0076759",
    Type: "movie",
    DVD: "21 Sep 2004",
    BoxOffice: "N/A",
    Production: "20th Century Fox",
    Website: "http://www.starwars.com/episode-iv/",
    Response: "True",
  },
]);
</script>

<style></style>
