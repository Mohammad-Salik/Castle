document.addEventListener( 'keypress', onDocumentKeyPress, false );
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 5000 );

//link textures
let textureDoor = new THREE.TextureLoader().load( 'assets/textures/door.jpg' );
let textureWalls = new THREE.TextureLoader().load( 'assets/textures/walls.jpg' );
let textureSky = new THREE.TextureLoader().load( 'assets/textures/sky.jpg' );
let textureFloor = new THREE.TextureLoader().load( 'assets/textures/floor.jpg' );
let textureRoof = new THREE.TextureLoader().load( 'assets/textures/roof.jpg' );
let textureRoofMain = new THREE.TextureLoader().load( 'assets/textures/roofmain.jpg' );
let textureGrass = new THREE.TextureLoader().load( 'assets/textures/grass.jpg' );
let textureMainWall = new THREE.TextureLoader().load( 'assets/textures/wall_main.jpg' );
let textureMainPillar = new THREE.TextureLoader().load( 'assets/textures/pillar_main.jpg' );
let textureMainBeam = new THREE.TextureLoader().load( 'assets/textures/marble.jpg' );

//declare variable textures
let textBeam = new THREE.MeshBasicMaterial( { map: textureMainBeam } );
let textPillar = new THREE.MeshBasicMaterial( { map: textureMainPillar } );
let textDoor = new THREE.MeshBasicMaterial( { map: textureDoor } );
let textWalls = new THREE.MeshBasicMaterial( { map: textureMainWall } );
let textSky = new THREE.MeshBasicMaterial( { map: textureSky } );
let textFloor = new THREE.MeshBasicMaterial( { map: textureFloor } );
let textRoof = new THREE.MeshBasicMaterial( { map: textureRoof } );
let textUpperFloor = new THREE.MeshBasicMaterial( { map: textureRoofMain } );
let textGrass = new THREE.MeshBasicMaterial( { map: textureGrass } );

//initialize shapes
const geomBackground = new THREE.BoxBufferGeometry(2100, 900, 2);
const geomDoor = new THREE.BoxBufferGeometry(25, 20, 20);
const geomBuilding = new THREE.BoxBufferGeometry(180, 30, 50);
const geomPlane = new THREE.BoxBufferGeometry(1000, 10, 500);
const geomPillar = new THREE.CylinderBufferGeometry(20, 20, 70, 12);
const geomPillar2 = new THREE.CylinderBufferGeometry(30, 30, 200, 12);
const geomPillarRoof = new THREE.CylinderBufferGeometry(10, 30, 20, 12);
const geomPillarRoof2 = new THREE.CylinderBufferGeometry(28, 30, 20, 12);
const geomUpperBuilding = new THREE.BoxBufferGeometry(20, 200, 20);
const geomGrass = new THREE.BoxBufferGeometry(100, 1, 90);

//declare variable shapes
let background = new THREE.Mesh(geomBackground, textSky);
let door = new THREE.Mesh(geomDoor, textDoor);
let buildingMain = new THREE.Mesh(geomBuilding, textUpperFloor);
let buildingBeam1 = new THREE.Mesh(geomUpperBuilding, textBeam);
let buildingBeam2 = new THREE.Mesh(geomUpperBuilding, textBeam);
let buildingBeam3 = new THREE.Mesh(geomUpperBuilding, textBeam);
let buildingBeam4 = new THREE.Mesh(geomUpperBuilding, textBeam);
let buildingBeam5 = new THREE.Mesh(geomUpperBuilding, textBeam);
let floor =  new THREE.Mesh(geomPlane, textFloor);
let pillar1 = new THREE.Mesh(geomPillar, textPillar);
let pillar2 = new THREE.Mesh(geomPillar, textPillar);
let pillar3 = new THREE.Mesh(geomPillar2, textWalls);
let roof1 = new THREE.Mesh(geomPillarRoof, textUpperFloor);
let roof2 = new THREE.Mesh(geomPillarRoof, textUpperFloor);
let roof3 = new THREE.Mesh(geomPillarRoof2, textUpperFloor);
let roof4 = new THREE.Mesh(geomPillar2, textUpperFloor);
let grassLeft = new THREE.Mesh(geomGrass, textGrass);
let grassRight = new THREE.Mesh(geomGrass, textGrass);

//add shapes to scene
scene.add(background, floor, door, buildingMain, buildingBeam1,  buildingBeam2, buildingBeam3, buildingBeam4,
          buildingBeam5,pillar1, pillar2, pillar3,
          roof1, roof2, roof3, roof4, grassLeft, grassRight);

//add positions of objects
background.position.set(0, 0, -1100);       floor.position.set(0, -39, -300);    
buildingMain.position.set(-10, -22, -230);    grassLeft.position.set(50, -30, -120);  

buildingBeam1.position.set(-92, -37, -248);  grassRight.position.set(-50, -30, -120);  
buildingBeam2.position.set(-76, -77, -256);  buildingBeam2.rotation.y = -0.6;
buildingBeam3.position.set(78, -57, -222);   buildingBeam3.rotation.y = -1.5;
buildingBeam4.position.set(-24, -101, -206); buildingBeam4.rotation.y = -0.2;
buildingBeam5.position.set(20, -101, -208);  buildingBeam5.rotation.y = 0.3;

roof1.position.set(50, 30, -230);            pillar1.position.set(50, -10, -230); 
roof2.position.set(-90, 30, -230);           pillar2.position.set(-90, -10, -230);
roof3.position.set(-4, -5, -220);            pillar3.position.set(-94, -33, -272);
roof4.position.set(70, -60, -240);           door.position.set(-2, -22, -200);        

//webgl renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var vertice = 4;
function animate() {
   requestAnimationFrame( animate );
   if (vertice == 1){
      if (camera.position.z == -400){
         vertice = 2;
      }
      camera.position.z += -1;
      camera.rotation.y += -0.004;
   }
   else if (vertice == 2){
      if (camera.position.x == 300){
         vertice = 3;
      }
      camera.position.x += 1;
      camera.rotation.y += -0.003;
   }
   else if (vertice == 3){
      if (camera.position.z == 0){
         vertice = 4;
      }
      camera.position.z += 1;
      camera.rotation.y += - 0.004;
   }
   else if (vertice == 4){
      if (camera.position.x == -300){
         vertice = 1;
      }
      camera.position.x += -1;
      camera.rotation.y += - 0.002;
   }
   renderer.render( scene, camera );
}
animate();

//function for printing position
function printLocation(target){
   console.log(
      "Z: " + target.position.z +
      "\nX: " + target.position.x +
      "\n rotation y: " + target.rotation.y +
      "\nY " + target.position.y
   );
}

//function for moving object
function moveObject(entity, Key){
   if (Key == 119){
      entity.position.z -= 2;
      printLocation(entity);
   }else if (Key == 115){
      entity.position.z += 2;
      printLocation(entity);
   }else if (Key == 97){
      entity.position.x -= 2;
      printLocation(entity);
   }else if (Key == 100){
      entity.position.x += 2;
      printLocation(entity);
   }else if (Key == 113){
      entity.rotation.y += 0.1;
      printLocation(entity);
   }else if (Key == 101){
      entity.rotation.y -= 0.1;
      printLocation(entity);
   }else if (Key == 49){
      entity.position.y -= 1;
      printLocation(entity);
   }else if (Key == 50){
      entity.position.y += 1;
      printLocation(entity);
   }
}

function onDocumentKeyPress(event){
   var Object = roof4; 
   var keyCode = event.which;
   console.log(keyCode);
   moveObject(Object, keyCode)
}