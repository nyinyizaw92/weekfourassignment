
class Movie{
    constructor(title,poster,overview,id,video){
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.id = id;
        this.video = video;
        //this.link = link;
    }

    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",'https://image.tmdb.org/t/p/w500' + this.poster)
        .replace("{{this.id}}",parseInt(this.id))
        .replace("{{this.casts}}",this.overview)
        .replace("{{this.video}}",JSON.parse(this.video));
        //.replace("{{this.link}}",this.link);

        return result;
    }
}

export default Movie;