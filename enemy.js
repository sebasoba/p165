AFRAME.registerComponent("enemy",{
    enemy:function(){
    enemy.addEventListener("collide", function (e) {
        if (e.detail.body.el.id === "weapon") {

            if (playerLife > 0) {
                playerLife -= 1;
                element.setAttribute("text", {
                    value: playerLife
                });
            }
            if (playerLife <= 0) {
                //show text
                var txt = document.querySelector("#over");
                txt.setAttribute("visible", true);

                //remove tanks                        
                var tankEl = document.querySelectorAll(".enemy")

                for (var i = 0; i < tankEl.length; i++) {
                    scene.removeChild(tankEl[i])

                }
            }

        }
    });
}
})