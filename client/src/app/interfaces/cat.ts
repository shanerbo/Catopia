export interface CatFilter {
  spay?: boolean | string;
  kitten?: boolean | string;
  gender?: string;
}

export interface Cat {
  name: string;
  color?: string;
  gender?: string;
  age?: number;
  spay?: boolean;
  prof_url?: string;
}
