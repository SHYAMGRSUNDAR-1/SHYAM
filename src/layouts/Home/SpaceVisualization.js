import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceVisualization = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    let camera1, camera2, scene1, scene2;
    let renderer1, renderer2;
    let isUserInteracting = false;
    let onMouseDownMouseX = 0;
    let onMouseDownMouseY = 0;
    let lon = 0;
    let onMouseDownLon = 0;
    let lat = 0;
    let onMouseDownLat = 0;
    let phi = 0;
    let theta = 0;

    const init = () => {
      const container1 = containerRef1.current;
      const container2 = containerRef2.current;

      camera1 = new THREE.PerspectiveCamera(
        155,
        window.innerWidth / window.innerHeight,
        1,
        1500
      );
      camera1.target = new THREE.Vector3(0, 0, 0);

      camera2 = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        1,
        1500
      );
      camera2.target = new THREE.Vector3(0, 0, 0);

      scene1 = new THREE.Scene();
      scene2 = new THREE.Scene();

      const geometry1 = new THREE.SphereGeometry(1500, 160, 40);
      geometry1.scale(-1, 1, 1);

      const geometry2 = new THREE.SphereGeometry(500, 160, 40);
      geometry2.scale(-1, 1, 1);

      const material1 = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space-blue.jpg'
        ),
      });

      const material2 = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
          'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space2.svg'
        ),
      });

      const mesh1 = new THREE.Mesh(geometry1, material1);
      const mesh2 = new THREE.Mesh(geometry2, material2);

      scene1.add(mesh1);
      scene2.add(mesh2);

      renderer1 = new THREE.WebGLRenderer({ alpha: true });
      renderer1.setPixelRatio(window.devicePixelRatio);
      renderer1.setSize(window.innerWidth, window.innerHeight);
      container1.appendChild(renderer1.domElement);

      renderer2 = new THREE.WebGLRenderer({ alpha: true });
      renderer2.setPixelRatio(window.devicePixelRatio);
      renderer2.setSize(window.innerWidth, window.innerHeight);
      container2.appendChild(renderer2.domElement);

      renderer1.domElement.id = 'canvas-bottom';
      renderer2.domElement.id = 'canvas-top';

      document.addEventListener('mousedown', onDocumentMouseDown, false);
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      document.addEventListener('mouseup', onDocumentMouseUp, false);
      document.addEventListener('wheel', onDocumentMouseWheel, false);

      window.addEventListener('resize', onWindowResize, false);
      window.addEventListener('scroll', onScroll, false);
    };

    const onWindowResize = () => {
      camera1.aspect = window.innerWidth / window.innerHeight;
      camera1.updateProjectionMatrix();
      renderer1.setSize(window.innerWidth, window.innerHeight);

      camera2.aspect = window.innerWidth / window.innerHeight;
      camera2.updateProjectionMatrix();
      renderer2.setSize(window.innerWidth, window.innerHeight);
    };

    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / scrollMax;

      lat = -500 + scrollPercent * 400;
      lon += 0.8;

      lat = Math.max(-200, Math.min(100, lat));
      phi = (300 - lat) * Math.PI / 180;
      theta = lon * Math.PI / 180;
      

      camera1.target.x = 3000 * Math.sin(phi) * Math.cos(theta);
      camera1.target.y = 3000 * Math.cos(phi);
      camera1.target.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera2.target.x = 1500 * Math.sin(phi) * Math.cos(theta);
      camera2.target.y = 500 * Math.cos(phi);
      camera2.target.z = 500 * Math.sin(phi) * Math.sin(theta);

      camera1.lookAt(camera1.target);
      camera2.lookAt(camera2.target);

      renderer1.render(scene1, camera1);
      renderer2.render(scene2, camera2);
    };

    const onDocumentMouseDown = (event) => {
      event.preventDefault();
      isUserInteracting = true;
      onMouseDownMouseX = event.clientX;
      onMouseDownMouseY = event.clientY;
      onMouseDownLon = lon;
      onMouseDownLat = lat;
    };

    const onDocumentMouseMove = (event) => {
      if (isUserInteracting === true) {
        lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
        lat = (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat;
      }
    };

    const onDocumentMouseUp = () => {
      isUserInteracting = false;
    };

    const onDocumentMouseWheel = (event) => {
      camera1.fov += event.deltaY * 0.05;
      camera1.updateProjectionMatrix();
      camera2.fov += event.deltaY * 0.05;
      camera2.updateProjectionMatrix();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      update();
    };

    const update = () => {
      if (isUserInteracting === false) {
        lon += 0.8;
      }

      lat = Math.max(-400, Math.min(100, lat));
      phi = THREE.MathUtils.degToRad(300 - lat);
      theta = THREE.MathUtils.degToRad(lon);

      camera1.target.x = 3000 * Math.sin(phi) * Math.cos(theta);
      camera1.target.y = 3000 * Math.cos(phi);
      camera1.target.z = 600 * Math.sin(phi) * Math.sin(theta);

      camera2.target.x = 1500 * Math.sin(phi) * Math.cos(theta);
      camera2.target.y = 600 * Math.cos(phi);
      camera2.target.z = 600 * Math.sin(phi) * Math.sin(theta);

      camera1.lookAt(camera1.target);
      camera2.lookAt(camera2.target);

      renderer1.render(scene1, camera1);
      renderer2.render(scene2, camera2);
    };

    init();
    animate();

    return () => {
      containerRef1.current.removeChild(renderer1.domElement);
      containerRef2.current.removeChild(renderer2.domElement);

      document.removeEventListener('mousedown', onDocumentMouseDown, false);
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      document.removeEventListener('mouseup', onDocumentMouseUp, false);
      document.removeEventListener('wheel', onDocumentMouseWheel, false);

      window.removeEventListener('resize', onWindowResize, false);
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <>
      <div
        id="space-container"
        ref={containerRef1}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />
      <div
        id="space-container-top"
        ref={containerRef2}
        style={{
          opacity: 0.5,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex:-1,
        }}
      />
    </>
  );
};

export default SpaceVisualization;
