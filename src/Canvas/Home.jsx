"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useIntersect,
  Image,
  ScrollControls,
  Scroll,
  Float,
  Text3D,
} from "@react-three/drei";

const material = new THREE.MeshBasicMaterial({ color: 0x444545 });

function Text({ size, line1, line2, line3, line4, line5, ...props }) {
  const visible = useRef(false);
  const ref = useIntersect((isVisible) => (visible.current = isVisible));
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    ref.current.position.y = THREE.MathUtils.damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 1 + 1,
      4,
      delta
    );
  });
  return (
    <group {...props}>
      <Float ref={ref} speed={1}>
        <Text3D
          font="./fonts/helvetiker_regular.typeface.json"
          size={size}
          material={material}
        >
          {line1}
          {" \n"}
          {line2}
          {" \n"}
          {line3}
          {" \n"}
          {line4}
          {" \n"}
          {line5}
        </Text3D>
      </Float>
    </group>
  );
}

function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport);
  return (
    <Scroll>
      <Text
        line1="In the heart of Spanish sunsets,"
        line2="under velvet underground,"
        size={0.25}
        position={[-w / 2.1, 0, 0]}
      />
      <Text
        line1="Ceci dances, her spirit free,"
        line2="her laughter the only sound."
        size={0.25}
        position={[-w / 2.05, -1.1, 0]}
      />
      <Text
        line1="With a heart as deep as history,"
        line2="her spirit wild and free,"
        size={0.25}
        position={[-w / 2, -h, 0]}
      />
      <Text
        line1="She loves @honeymoon’s verses,"
        line2="and the rhythm of the sea."
        size={0.22}
        position={[-w / 2.2, -h * 1.1, 0]}
      />
      <Text
        line1="Her team with Stella and Jack,"
        line2="running a festival's thrill,"
        size={0.25}
        position={[-w / 2.1, -h * 1.4, 0]}
      />
      <Text
        line1="In the labour of their passion,"
        line2="time seems to stand still."
        size={0.25}
        position={[-w / 2.2, -h * 1.5, 0]}
      />
      <Text
        line1="Jack and Ceci,"
        line2="their bond unbroken,"
        line3="like the vinyl's endless spin."
        size={0.25}
        position={[-w / 2.2, -h * 1.65, 0]}
      />
      <Text
        line1="In the dance of their existence,"
        line2="it was always win-win."
        size={0.23}
        position={[-w / 2.3, -h * 1.8, 0]}
      />
      <Text
        line1="Her tattoos tell a story,"
        line2="of Dire Straits and dreams,"
        size={0.25}
        position={[-w / 2.12, -h * 2, 0]}
      />
      <Text
        line1="In the aura of the cheesy techno,"
        line2="she's more than what she seems."
        size={0.22}
        position={[-w / 2.13, -h * 2.1, 0]}
      />
      <Text
        line1="Her passion for the mountains,"
        line2="where she'd often soul seek,"
        size={0.25}
        position={[-w / 2.08, -h * 2.3, 0]}
      />
      <Text
        line1="Her wisdom and empowerment,"
        line2="it's all part of her mystique."
        size={0.25}
        position={[-w / 2.09, -h * 2.4, 0]}
      />
      <Text
        line1="Her heart beats on the rhythm"
        line2="of the ancient Egyptian sands."
        size={0.25}
        position={[-w / 2.11, -h * 2.6, 0]}
      />
      <Text
        line1="Her soul soars"
        line2="in the architectures"
        line3="of far-off lands."
        size={0.25}
        position={[-w / 2.15, -h * 2.7, 0]}
      />
      <Text
        line1="Her hands,"
        line2="they love to cook,"
        line3="a condensed milk sandwich cake"
        size={0.2}
        position={[-w / 2.13, -h * 2.9, 0]}
      />
      <Text
        line1="Her family,"
        line2="her foundation,"
        line3="for them,"
        line4="any risk,"
        line5="she'll take."
        size={0.25}
        position={[-w / 2.09, -h * 3.3, 0]}
      />
      <Text
        line1="She loves the thrill of dancing,"
        line2="the joy of a good book,"
        size={0.25}
        position={[-w / 2.09, -h * 3.8, 0]}
      />
      <Text
        line1="She finds solace in writing,"
        line2="in every corner, every nook."
        size={0.25}
        position={[-w / 2.1, -h * 3.9, 0]}
      />
      <Text
        line1="Her love for travelling is a flame,"
        line2="burning ever so bright,"
        size={0.22}
        position={[-w / 2.11, -h * 4.2, 0]}
      />
      <Text
        line1="In the heart of each city,"
        line2="she finds sheer delight."
        size={0.25}
        position={[-w / 2.12, -h * 4.3, 0]}
      />

      <Text
        line1="On her birthday,"
        line2="she dances,"
        line3="under the starry night."
        size={0.25}
        position={[-w / 2.13, -h * 5, 0]}
      />
      <Text
        line1="With the mountains as her backdrop,"
        line2="it's a beautiful sight."
        size={0.21}
        position={[-w / 2.12, -h * 5.2, 0]}
      />

      <Text
        line1="She is a woman of passion,"
        line2="a woman of grace,"
        size={0.25}
        position={[-w / 2.09, -h * 5.3, 0]}
      />
      <Text
        line1="Maria Cecilia Carolina Madrida Croquetta"
        line2="Perez De Acha Lopez,"
        line3="you light up every space."
        size={0.18}
        position={[-w / 2.1, -h * 5.5, 0]}
      />
    </Scroll>
  );
}

export const Home = () => {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#fff8ed"]} />
      <ScrollControls damping={3} pages={7}>
        <Items />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `40vh`,
              right: "20vw",
              fontSize: "5em",
              transform: `translate3d(0,-100%,0)`,
            }}
          >
            happy
          </h1>
          <h1 style={{ position: "absolute", top: "100vh", left: "15vw" }}>
            birthday
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "212vh",
              right: "10vw",
              fontSize: "20vw",
            }}
          >
            to
          </h1>
          <h1 style={{ position: "absolute", top: "380vh", left: "10vw" }}>
            you
          </h1>
          <h1 style={{ position: "absolute", top: "500vh", right: "15vw" }}>
            my love,
          </h1>
          <h1 style={{ position: "absolute", top: "560vh", right: "5vw", fontSize: "5em"}}>
            Ceci.
          </h1>
          <h1 style={{ position: "absolute", top: "600vh", right: "10vw" }}>
            <br />
          </h1>
          <div
            style={{
              position: "absolute",
              top: "625vh",
              right: "25vw",
              width: "auto",
              maxWidth: "50vw",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="https://maps.google.com">
              <img src="/1.jpg" style={{ maxWidth: "100%", height: "auto" }} />
            </a>
          </div>
          <h1 style={{ position: "absolute", top: "700vh", right: "10vw" }}>
            <br />
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
