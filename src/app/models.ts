export interface Game{
metacritic_url: any;
    id:string;
    background_image:string;
    name:string;
    released: string;
    website:string;
    description:string;
    genres: Array<Genre>;
    metacritic:number;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings:Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers:  Array<Trailer>;
}
export interface APIResponse<T>{
    results: Array<T>;
}
interface Genre{
    name: string;
}
interface ParentPlatform{
platform:{
    name:string;
    slug:string;

};
}
interface Publishers{
        name:string;
    }

interface Rating{
        title:string;
        id:number;
        count:number;
    }
    interface Screenshots{
        image:string;
    }
    interface Trailer{
        data:{
          max: string;
        };
    }