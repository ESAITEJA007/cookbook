export class Recipe{
    name: string;
    description: string;
    imagePath: string;
    
    constructor(name: string, desc: string, imgpth: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imgpth;
    }
}