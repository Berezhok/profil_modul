class Pokemon{
    constructor(name, color, lvl, type){
        this.name = name;
        this.color = color;
        this.lvl = lvl;
        this.type = type;
    }
    lvlUp(){
        this.lvl ++;
    }
}

class Slowpoke extends Pokemon{
    constructor(name, color, lvl=1, type, games){
        super(name, color, lvl=1, type)
        this.games = games;
    }
    attack(){
        console.log("Иххаааййй");
    }
    hide(){
        console.log("ну нафиг");
    }
    
}




