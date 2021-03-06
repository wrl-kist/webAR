﻿
function initEnvironment() {
	MAVR.Config.camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000 );
	MAVR.Config.camera.position.z = 3;
  
	MAVR.Config.controls = new THREE.TrackballControls( MAVR.Config.camera );	
	
	MAVR.Config.renderer = new MAVR.MixedRenderer(MAVR.Config.camera);
}

function init() {
	initEnvironment();
	
	// create the iframe element
	var url		= 'http://threejs.org/';
	var domElement	= document.createElement('iframe');
	domElement.src	= url;
	domElement.style.border	= 'none';
	
	var opts = {
		transform :{
			position: {
				x: 0.5,
				y: 0,
				z: 0
			},
			rotation: {
				x: 0, 
				y: 0,
				z: 0
			},
			scale: {
				x: 2,
				y: 2,
				z: 2
			}
		}
	};
	
	// create the plane
	var virtualObject = new MAVR.HTMLVRObject( domElement, opts );
	var glElement = virtualObject.getWebGLElement();
	var glScene = MAVR.Config.renderer.getWebGLScene();
	glScene.add(glElement);
	
	//////////////////////////////////////////////////////////////////////////////////
	//		add objects in the scene					//
	//////////////////////////////////////////////////////////////////////////////////

	var geometry	= new THREE.TorusKnotGeometry(0.5-0.125, 0.125);
	var material	= new THREE.MeshNormalMaterial();
	var mesh	= new THREE.Mesh( geometry, material );
	mesh.position.set(+1,0,+0.5);
	glScene.add( mesh );
	
	var geometry	= new THREE.TorusKnotGeometry(0.5-0.125, 0.125);
	var material	= new THREE.MeshNormalMaterial();
	var mesh	= new THREE.Mesh( geometry, material );
	mesh.position.set(-1,0,-0.5);
	glScene.add( mesh );
}

function animate() {
	requestAnimationFrame( animate );

	MAVR.Config.controls.update();
	
	MAVR.Config.renderer.update();
}