import React, { Component } from "react";
import * as THREE from "three";
import filePath from "../../assets/glb/RestaurantBooth7.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Model extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var width = 100;
    var height = 100;
    var intensity = 1.4;
    var rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
    rectLight.position.set(1, 1, 10);
    rectLight.lookAt(1, 1, 3);
    scene.add(rectLight);

    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementsByClassName("three-canvas")[0]
      .appendChild(renderer.domElement);

    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    let loader = new GLTFLoader();
    loader.load(
      filePath,
      (gltf) => {
        // called when the resource is loaded
        scene.add(gltf.scene);
      },
      (xhr) => {
        // called while loading is progressing
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        // called when loading has errors
        console.error("An error happened", error);
      }
    );

    animate();
  }
  

  render() {
    return <div className="three-canvas">{this.model}</div>;
  }
}
