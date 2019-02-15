

class API_URL{
    constructor(){
        this.upcoming_url = "movie/upcoming?api_key=<<api_key>>";
        this.base_url = "https://api.themoviedb.org/3/";
       // this.collectionid = "collection/{collection_id}?api_key=<<api_key>>"
    }

    getUpcomingURL(key){
        return this.base_url+this.upcoming_url.replace("<<api_key>>",key);
    }
    

   // getCollectionId(key){
     //   return this.base_url+this.collectionid.replace("Integer",key);
    //}
}

export default API_URL;