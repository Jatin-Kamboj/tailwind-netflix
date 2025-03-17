<template>
  <div class="movie-poster mb-6">
    <div
      class="w-full h-[60vh] flex justify-center items-center relative gap-6"
    >
      <img
        class="w-full h-full object-cover"
        src="https://m.media-amazon.com/images/M/MV5BODc1YTE2MDUtNGQ1NS00YmIzLWFjMDItMTg0NjJjMzA0MGQ4XkEyXkFqcGc@._V1_.jpg"
        alt="Homepage movie poster"
      />

      <div
        class="movie-poster__details absolute bottom-12 left-10 flex flex-col gap-5"
      >
        <div
          class="movie-poster__heading text-3xl md:text-6xl font-montserrat font-extrabold text-white"
        >
          Eye for an Eye
        </div>

        <div class="movie-poster__buttons flex gap-2.5 items-center">
          <app-button label="Play" variant="primary" #appendIcon>
            <PlayIcon class="h-7 w-7" />
          </app-button>

          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <PlusIcon class="h-7 w-7" />
          </div>
          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <HandThumbUpIcon class="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="movie-poster__description grid-cols-2 grid text-white my-4 gap-3"
    >
      <div class="text-white text-sm md:text-base">
        In small-town Punjab, three friends dream of better lives in London but
        struggle to secure visas — until an ex-soldier reveals a wildly risky
        route.
      </div>
      <div class="movie_poster__casts">
        <div><span class="text-grayish">Cast: </span> Cast</div>
      </div>
    </div>

    <div class="grid grid-cols-5">
      <div
        class="movie-card rounded-md relative cursor-pointer bg-[#2F2F2F] h-[300px]"
      >
        <img
          class="w-full h-[150px] object-cover rounded-lg"
          src="https://m.media-amazon.com/images/M/MV5BODc1YTE2MDUtNGQ1NS00YmIzLWFjMDItMTg0NjJjMzA0MGQ4XkEyXkFqcGc@._V1_.jpg"
          alt="Homepage movie"
        />

        <div class="flex justify-between items-center p-4 text-white">
          <div class="">2023</div>

          <div
            class="h-9 w-9 text-white ring-2 rounded-full ring-gray-400 cursor-pointer hover:ring-white flex items-center justify-center"
          >
            <PlusIcon class="h-7 w-7" />
          </div>
        </div>

        <div class="text-xs md:text-sm p-4 text-white">
          A steely prison warden (Shah Rukh Khan) is driven by a brutal mission
          for justice in this exclusive extended cut of the record-breaking hit.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PlayIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/vue/24/solid";
import { HandThumbUpIcon } from "@heroicons/vue/24/outline";
import { AppButton } from "@/components/shared";
import { MovieList } from "@/components/movie";
import { ref } from "vue";

const movies = ref([
  {
    id: 1,
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
    id: 2,
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
