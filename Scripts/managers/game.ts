//<!--Rachita Khare(300986795)
//Comp_397 Assignment-2

module managers {
    export class Game {
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static scoreBoard : managers.ScoreBoard;
    }
}