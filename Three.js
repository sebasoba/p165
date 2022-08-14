AFRAME.registerComponent("three",{
    init: function(){
    var position1 = new THREE.Vector3();
    var position2 = new.THREE.Vector3();

    var player = document.querySelector("#weapon").object3D
    var enemy_fireball = fireball.object3D;
    player.getWorldPosition(position1);
    enemy_fireball.getWorldPosition(position2);

    var direction = new THREE.Vector3();

    direction.subVectors(position1, position2).normalize()

    fireball.setAttribute("velocity", direction.multiplyScalar(20))
    }
})