class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function (data){
        gameState=data.val();
         })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });

    }

    async start(){

        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    
        earth = createSprite(width-150, 200, 10, 10);
        earth.addImage(earthImg);
        earth.scale = 0.5;

        helicopter = createSprite(width-400, 200, 100, 100);
        helicopter.addAnimation("op",heliAnim);
        helicopter.scale = 0.5;
    } 

    play(){
        console.log("Play")
    }

}