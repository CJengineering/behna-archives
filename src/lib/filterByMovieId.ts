import {AirtableRecord } from "@/interfaces";

  export function filterByMovieId(actors: AirtableRecord[], movieId: string) {
    return actors.filter(actor => Array.isArray(actor.fields['Films']) && actor.fields['Films'].includes(movieId));
  }
  