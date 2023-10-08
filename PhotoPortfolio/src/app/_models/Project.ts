export class Project {
  mainImage: string;
  title: string;
  images?: string[];

  constructor(mainImage:string, title:string, images:string[]) {
    this.mainImage = mainImage;
    this.title = title;
    this.images = images;
  }
}
