import mongoose from "mongoose";

const { Schema } = mongoose;

const AnimeSchema = new Schema({
    mal_id: Number,
    url: String,
    aried: {
        from: Date,
        to: Date,
    },
    airing: Boolean,
    approved: Boolean,
  background: String,
  broadcast: {
    day: String,
    time: String,
    timezone: String,
    string: String,
  },
  demographics: [String],
  duration: String,
  episodes: Number,
  explicit_genres: [String],
  favorites: Number,
  genres: [{
    mal_id: Number,
    type: String,
    name: String,
    url: String,
  }],
  images: {
    jpg: {
      image_url: String,
    },
  },
  licensors: [{
    mal_id: Number,
    type: String,
    name: String,
  }],
  mal_id: Number,
  members: Number,
  popularity: Number,
  producers: [{
    mal_id: Number,
    type: String,
    name: String,
  }],
  rank: Number,
  rating: String,
  score: Number,
  scored_by: Number,
  season: String,
  source: String,
  status: String,
  studios: [String],
  synopsis: String,
  themes: [{
    mal_id: Number,
    type: String,
    name: String,
  }],
  title: String,
  title_english: String,
  title_japanese: String,
  title_synonyms: [String],
  titles: [{
    type: String,
    title: String,
  }],
  trailer: {
    youtube_id: String,
    url: String,
  },
  type: String,
  url: String,
  year: Number,

});
 const Anime = mongoose.model('Anime', AnimeSchema);
 export default Anime;