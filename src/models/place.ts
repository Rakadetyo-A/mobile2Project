import { Loc } from './location';

export class Place {
  constructor (public title: string,
                public description: string,
                public location: Loc,
                public imagePath: string) {}
}
