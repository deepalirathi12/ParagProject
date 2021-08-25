class Form{
    constructor(){
        this.title = createElement('h1');
        this.name = createInput('Enter your name here');
        this.nameB = createButton('Play');
        this.greeting = createElement('h2');
        this.restart = createButton('Restart');
        this.info = createButton('How To Play?');
        this.information = createElement('h1');
    }

    display(){

        this.title.html("Save the Earth");
        this.title.position(width/2-150,10);
        this.title.style('color','lightblue')
        this.title.style('font-size','50px')

        this.name.position(100,180);
        this.name.style('font-size','25px');
        this.name.style('width','300px');
        this.name.style('height','30px');
        this.name.style('background','white');

        this.nameB.position(100,220);
        this.nameB.style('font-size','20px');
        this.nameB.style('background','yellow');

        this.info.position(100,300);
        this.info.style('font-size','20px');
        this.info.style('background','yellow')

        this.restart.position(width-100,height-100);
        this.restart.style('background','yellow');  

        this.nameB.mousePressed(() => {
            player = new Player();
            playerCount+=1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);

            var name = this.name.value();
            this.greeting.html("Hello "+name);
            this.greeting.position(100,100);
            this.greeting.style('color','white');
            this.greeting.style('font-size','30px')

            this.name.hide();
            this.nameB.hide();
            this.info.hide();

            this.return=createButton('Return');
            this.return.position(10,10);
            this.return.style('font-size','20px');
            this.return.style('background','yellow')
            this.return.style('width','100px');

            this.return.mousePressed(() =>{
                this.return.hide();
                this.greeting.hide();
                this.name.show();
                this.nameB.show();
                this.info.show();
            });
        });

        this.info.mousePressed(() => {
            this.name.hide();
            this.nameB.hide();
            this.info.hide();

            this.information.html('ABHI LIKHNA H');
            this.information.position(100,100);
            this.information.style('color','white')

            this.return = createButton('Return');
            this.return.position(10,10);
            this.return.style('background','yellow')
            this.return.style('font-size','20px');
            this.return.style('width','100px');

            this.return.mousePressed(() =>{
                this.return.hide();
                this.information.hide();
                this.name.show();
                this.nameB.show();
                this.info.show();
            });

        });

        

        this.restart.mousePressed(()=>{
            
            
            this.warning=createElement();
            this.warning.html("Are you sure you want to restart?");
            this.warning.position(width/2-100,height/2);
            this.warning.style('color','blue');
            this.warning.style('font-size','20px');

            this.ok = createButton('Yes');
            this.ok.position(width/2-50,height/2+40);
            this.ok.style('background','red');

            this.ok.mousePressed(() => {
                console.log("PRESSED YES");
                var f=new Form;
                f.display();
                this.ok.hide();
                this.nok.hide();
                this.warning.hide();
                this.greeting.hide();
                this.information.hide();
            });

            this.nok = createButton('No');
            this.nok.position(width/2+50,height/2+40);
            this.nok.style('background','green');

            this.nok.mousePressed(() =>{
                console.log("PRESSED NO");
                this.ok.hide();
                this.nok.hide();
                this.warning.hide();
            });
        })
        

    }

}