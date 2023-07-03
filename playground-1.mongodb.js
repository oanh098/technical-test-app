/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

const database = 'anime_db';
const collection = 'anime';
// Select the database to use.
use(database);
//db.createCollection(collection)
db.anime.insertMany([

    {
        'mal_id': 1,
        'url': 'https://myanimelist.net/anime/1/Cowboy_Bebop',
        'aried': {
            'from': '1998-04-03T00:00:00+00:00',
            'to': '1999-04-24T00:00:00+00:00',
        },
        'airing': false,
        'approved': true,
        'background': 'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebops biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a gateway drug to anime aimed at adult audiences.',
        'broadcast': {
        'day': 'Saturdays',
        'time': '01:00',
        'timezone': 'Asia/Tokyo',
        'string': 'Saturdays at 01:00 (JST)',
      },
      'demographics': [],
      'duration': '24 min per ep',
      'episodes': 26,
      'explicit_genres': [],
      'favorites': 8,
      'genres': [{
        'mal_id': 8,
        'type': '',
        'name': '',
        'url': '',
      }],
      'images': {
        'jpg': {
          'image_url': '',
        },
      },
      'licensors': [{
        'mal_id': 8,
        'type': '',
        'name': '',
      }],
      'mal_id': 8,
      'members': 8,
      'popularity': 8,
      'producers': [{
        'mal_id': 8,
        'type': '',
        'name': '',
      }],
      'rank': 8,
      'rating': '',
      'score': 8,
      'scored_by': 8,
      'season': 'String',
      'source': 'String',
      'status': 'String',
      'studios': [],
      'synopsis': 'String',
      'themes': [{
        'mal_id': 8,
        'type': 'String',
        'name': 'String',
      }],
      'title': 'String',
      'title_english': 'String',
      'title_japanese': 'String',
      'title_synonyms': [],
      'titles': [{
        'type': 'String',
        'title': 'String',
      }],
      'trailer': {
        'youtube_id': 'String',
        'url': 'String',
      },
      'type': 'String',
      'url': 'https://myanimelist.net/anime/1/Cowboy_Bebop',
      'year': 1998,
    
    },

]);

// Insert a few documents into the sales collection.


