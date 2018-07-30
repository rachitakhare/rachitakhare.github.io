namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): void {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
            switch(object2.name) {
                case "powerup":
                let yaySound = createjs.Sound.play("powerup_sound");
                yaySound.volume = 0.2;
                managers.Game.scoreBoard.Score += 200;
                break;

                case "cactus":
                let thunderSound = createjs.Sound.play("thunder");
                thunderSound.volume = 0.2;
                managers.Game.scoreBoard.Lives -=1;
                break;
            }

        }
      }
      else {
          object2.isColliding = false;
      }
    }
  }
}
