export interface Ipost {
    postedBy:  string;
    title: string;
    description: string;
    location: {
      lat: number;
      lng: number;
      label: string;
    };
    mode: string;
    tags: string[];
    stats: {
      reshares: number;
      signups: number;
      comments: number;
    };
}
