var circleArray = [];
function Circle(x,y,r,dx,dy){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = colors[Math.floor(Math.random()*colors.length)];
    this.draw = function(){
        pen.beginPath();
        pen.arc(this.x,this.y,this.r,0,Math.PI*2);
        pen.fillStyle = this.color;
        pen.fill();
    }
    this.update = function(){
        this.x = this.x + dx;
        this.y = this.y + dy;
        if(mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100){
            if(this.r < 30){
                this.r+=1;
            }
