let canvas = document.querySelector("#gameScreen");
let c = canvas.getContext('2d');
let input = document.querySelector("#input")

canvas.width = innerWidth;
canvas.height = innerHeight;
let radius = 20;
let x = 30 || canvas.width-x-radius;
let y = Math.floor(Math.random() * canvas.height / 2 - radius + radius);
let incrementer =  4;
input = 1

function Ball(x,y,radius,dy,color){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.dy = dy;
	this.color = color;

	this.update = () => {
		if(this.y + this.radius > canvas.height){
			this.dy = -this.dy;
		} else {
			this.dy += incrementer
		}
		this.y += this.dy

		// console.log(this.y)
		// this.x += this.dx
		this.draw();
	} 
	this.draw = () => {
		c.beginPath()
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}
}
window.addEventListener("resize", () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
})


	
let childOne = new Ball(canvas.width - radius - 10,y,30,input.value,"navy")
let childTwo = new Ball(x,y,30,incrementer,"navy")


function animation(){
	requestAnimationFrame(animation);
	c.clearRect(0,0,canvas.width,canvas.height)
	
	childOne.update();
	childTwo.update();
	
}

animation()

