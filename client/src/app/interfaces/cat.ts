export interface CatFilter {
  spay: boolean;
  kitten: boolean;
  gender: string;
}

export interface Cat {
  name: string;
  color?: string;
  gender?: string;
  age?: string;
  spay?: boolean;
  prof_url?: string;
}
