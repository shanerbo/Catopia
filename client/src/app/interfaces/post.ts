interface Comment {
  content: string;
}

export interface Post {
  photos: FileList | string;
  description: string;
  comments?: Comment[];
}
