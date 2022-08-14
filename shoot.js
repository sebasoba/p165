AFRAME.registerComponent("shoot",{
    init: function(){
        this.shootBall();
    },
    shootBall: function(){
        window.addEventListener("keydown", (e) => {
            if (e.key === "z") {
                var ball = document.createElement("a-entity");
        
                ball.setAttribute("geometry", {
                  primitive: "sphere",
                  radius: 2,
                });
        
                ball.setAttribute("material", "color", "black");
        
        
                ball.setAttribute("position", {
                  x: pos.x,
                  y: pos.y + 1,
                  z: pos.z - 0.5,
                });
            }
        })
    }
})