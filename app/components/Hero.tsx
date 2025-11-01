"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

interface CustomNode extends THREE.Mesh {
  velocity: THREE.Vector3;
  rotationSpeed: number;
  baseColor: THREE.Color;
  hoverColor: THREE.Color;
  hoverState: number;
}

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      controls: OrbitControls;
    const nodes: CustomNode[] = [];
    let connections: THREE.LineSegments,
      raycaster: THREE.Raycaster,
      mouse: THREE.Vector2;
    let animationFrameId: number;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 12, 25);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.2;
      controls.maxDistance = 50;
      controls.minDistance = 8;
      controls.enabled = false;

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      const nodeGeometry = new THREE.IcosahedronGeometry(0.35, 3);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ffd5,
        transparent: true,
        opacity: 0.8,
      });

      const createCustomNode = (
        geometry: THREE.IcosahedronGeometry,
        material: THREE.MeshBasicMaterial
      ): CustomNode => {
        // Create basic mesh first
        const mesh = new THREE.Mesh(geometry, material);

        // Cast to unknown first, then to CustomNode (safe because we're adding all required properties)
        const node = mesh as unknown as CustomNode;

        // Add required CustomNode properties
        node.velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        );
        node.rotationSpeed = (Math.random() - 0.5) * 0.02;
        node.baseColor = new THREE.Color(0x00ffd5);
        node.hoverColor = new THREE.Color(0xff2cc4);
        node.hoverState = 0;

        // Set position
        node.position.set(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50
        );

        return node;
      };

      for (let i = 0; i < 300; i++) {
        const node = createCustomNode(nodeGeometry, nodeMaterial.clone());
        nodes.push(node);
        scene.add(node);
      }

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffd5,
        transparent: true,
        opacity: 0.5,
      });
      connections = new THREE.LineSegments(
        new THREE.BufferGeometry(),
        lineMaterial
      );
      scene.add(connections);

      const light1 = new THREE.PointLight(0x00ffd5, 2.5, 120);
      light1.position.set(30, 30, 30);
      scene.add(light1);
      const light2 = new THREE.PointLight(0xff2cc4, 2.5, 120);
      light2.position.set(-30, -30, 30);
      scene.add(light2);
      const light3 = new THREE.PointLight(0x3a1cbd, 1.5, 150);
      light3.position.set(0, -40, -20);
      scene.add(light3);
      const ambient = new THREE.AmbientLight(0x404040, 0.5);
      scene.add(ambient);

      window.addEventListener("resize", onResize);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("click", onMouseClick);
    };

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
      camera.position.x += (mouse.x * 18 - camera.position.x) * 0.06;
      camera.position.y += (-mouse.y * 18 - camera.position.y) * 0.06;
      camera.lookAt(scene.position);
    };

    const onMouseClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes);
      if (intersects.length > 0) {
        const node = intersects[0].object as CustomNode;
        node.velocity.add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2,
            (Math.random() - 0.5) * 0.2
          )
        );
      }
    };

    const updateConnections = () => {
      const positions = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = nodes[i].position.distanceTo(nodes[j].position);
          if (dist < 8) {
            positions.push(
              nodes[i].position.x,
              nodes[i].position.y,
              nodes[i].position.z,
              nodes[j].position.x,
              nodes[j].position.y,
              nodes[j].position.z
            );
          }
        }
      }
      connections.geometry.dispose();
      connections.geometry = new THREE.BufferGeometry();
      connections.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes);

      for (const node of nodes) {
        node.hoverState *= 0.9;
        node.position.add(node.velocity);
        node.rotation.x += node.rotationSpeed;
        node.rotation.y += node.rotationSpeed;
        (node.material as THREE.MeshBasicMaterial).color
          .copy(node.baseColor)
          .lerp(node.hoverColor, node.hoverState);
        if (node.position.length() > 35) node.velocity.multiplyScalar(-0.95);
      }

      if (intersects.length > 0) {
        const closest = intersects[0].object as CustomNode;
        closest.hoverState = 1;
        for (const node of nodes) {
          const distance = node.position.distanceTo(closest.position);
          if (distance < 6 && node !== closest) {
            node.hoverState = Math.max(node.hoverState, 1 - distance / 6);
          }
        }
      }

      updateConnections();
      controls.update();
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", onMouseClick);
      cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.domElement.remove();
    };
  }, []);

  // Rotating subtitle titles (cycles every ~2.6s)
  const titles = [
    "Full-Stack Software Engineer",
    "Frontend Developer",
    "React Developer",
    "UI Engineer",
    "Backend Engineer",
    "AI Developer",
    "Tech Enthusiast",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 4000);
    return () => clearInterval(id);
  }, [titles.length]);

  return (
    <section id="home" className="h-screen w-full relative">
      <div id="hero-container" ref={mountRef}>
        <div className="hero-content">
          <section
            id="home"
            className="h-screen w-full flex flex-col justify-center items-center text-center"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={120}
                height={120}
                className="rounded-full border-4 border-white/20 shadow-xl"
              />
            </motion.div>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-6xl mt-6 myname"
            >
              Simon Emmanuel
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-2xl text-gray-100 mt-6 pb-2 h-8 flex items-end justify-center font-semibold md:font-bold"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="inline-block subtitle text-shadow-lg"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-4 mt-4"
            >
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-lg"
              >
                Contact Me
              </Link>
              <a
                href="https://github.com/symon9"
                target="_blank"
                className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-lg"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/simon-emmanuel"
                target="_blank"
                className="p-3.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors shadow-lg"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
