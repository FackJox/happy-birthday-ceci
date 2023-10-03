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

import video from "../assets/video.mp4";


const material = new THREE.MeshBasicMaterial({ color: 0x444545 });
const material2 = new THREE.MeshBasicMaterial({ color: '#676767' });


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
      <Float ref={ref} speed={1.3} floatingRange={[-0.02, 0.02]}>
        <Text3D
          font="./fonts/wonder-season.json"
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

function Text2({ size, line1, line2, line3, line4, line5, ...props }) {
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
        <group>

        <Text3D
          font="./fonts/wonder-season.json"
          size={size * 1.2}
          material={material2}
        >
          {line1}
          {" \n"}
          {line2}
          {" \n"}
        
        </Text3D>
  
        <Text3D
          font="./fonts/wonder-season.json"
          size={size * 0.9}
          material={material}
          position={[0, -0.4, 0]}
          >
          {" \n"}
          {line3}
        
        </Text3D>
          </group>
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
        size={0.21}
        position={[-w / 2.05, 0, 0]}
      />
      <Text
        line1="Ceci dances, her spirit free,"
        line2="her laughter the only sound."
        size={0.22}
        position={[-w / 2.05, -1.1, 0]}
      />
      <Text
        line1="With a heart as deep as history,"
        line2="her spirit wild and free,"
        size={0.21}
        position={[-w / 2.01, -h, 0]}
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
        size={0.24}
        position={[-w / 2.1, -h * 1.4, 0]}
      />
      <Text
        line1="In the labour of their passion,"
        line2="time seems to stand still."
        size={0.21}
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
        size={0.225}
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
        size={0.2}
        position={[-w / 2.13, -h * 2.1, 0]}
      />
      <Text
        line1="Her passion for the mountains,"
        line2="where she'd often soul seek,"
        size={0.22}
        position={[-w / 2.08, -h * 2.3, 0]}
      />
      <Text
        line1="Her wisdom and empowerment,"
        line2="it's all part of her mystique."
        size={0.22}
        position={[-w / 2.09, -h * 2.4, 0]}
      />
      <Text
        line1="Her heart beats on the rhythm"
        line2="of the ancient Egyptian sands."
        size={0.23}
        position={[-w / 2.11, -h * 2.6, 0]}
      />
      <Text
        line1="Her soul soars"
        line2="in the architectures"
        line3="of far-off lands."
        size={0.28}
        position={[-w / 2.15, -h * 2.75, 0]}
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
        size={0.28}
        position={[-w / 8, -h * 3.3, 0]}
      />
      <Text
        line1="She loves the thrill of dancing,"
        line2="the joy of a good book,"
        size={0.22}
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
        size={0.21}
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
        position={[-w / 2.13, -h * 4.95, 0]}
      />
      <Text
        line1="With the mountains as her backdrop,"
        line2="it's a beautiful sight."
        size={0.19}
        position={[-w / 2.12, -h * 5.1, 0]}
      />

      <Text
        line1="She is a woman of passion,"
        line2="a woman of grace,"
        size={0.25}
        position={[-w / 2.09, -h * 5.2, 0]}
      />
      <Text2
        line1="Maria Cecilia Carolina Madrida "
        line2="Croquetta Perez De Acha Lopez,"
        line3="you light up every space."
        size={0.17}
        position={[-w / 2.2, -h * 5.4, 0]}
      />
    </Scroll>
  );
}

export const Home = () => {
  const videoElement = useRef(null);


  return (
    <Canvas
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
     onCreated={({ gl }) => { gl.toneMapping = THREE.NoToneMapping }}
    >
      <color attach="background" args={["#FFF0D5"]} />
      <ScrollControls damping={2} pages={8} >
        <Items />
        <Scroll html style={{ width: "100%" }}>
          <h1
            style={{
              position: "absolute",
              top: `35vh`,
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
              top: "210vh",
              right: "10vw",
              fontSize: "20vw",
            }}
          >
            to
          </h1>
          <h1 style={{ position: "absolute", top: "360vh", left: "10vw" }}>
            you
          </h1>
          <h1 style={{ position: "absolute", top: "465vh", right: "15vw" }}>
            my love,
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "570vh",
              right: "5vw",
              fontSize: "5em",
            }}
          >
            Ceci.
          </h1>
       
          
          <div className="absolute top-[600vh] w-screen flex-col items-center justify-center align-center p-2 md:p-5">

          <div className="relative flex h-auto justify-center items-center align-center p-4">
            <video
              src={video}
              ref={videoElement}
              // onTimeUpdate={handleOnTimeUpdate}
              autoPlay
              loop
              muted
              playsInline
              className="flex object-cover w-full h-3/4 items-center justify-center"
              onClick={() => {
                if (videoElement.current) {
                  videoElement.current.requestFullscreen();
                }
              }}
            />
            </div>


          <div className="relative h-screen flex p-4 ">
          <div className=" w-full h-3/4 md:h-screen flex ">

            <iframe src="https://my.atlist.com/map/2535defd-50df-4387-b379-06d89c4a1d14?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="100%"  allowFullScreen></iframe>
            </div>
            </div>


          </div>

          <div className="absolute top-[760vh] w-screen flex-col items-center justify-end text-end mr-64 align-bottom font-sm p-2 md:p-5"><h2>xoxo</h2></div>


        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};
