// import React from 'react'
// import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

// export default function ShaderBackground() {
//   return (
//     <ShaderGradientCanvas
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: -1,
//         pointerEvents: 'none',
//       }}
//       pixelDensity={1.5}
//       fov={45}
//     >
//       <ShaderGradient
//         animate="off"
//         color1="#3a1e8c"
//         color2="#3a1e8c"
//         color3="#2e1a6b"
//         uSpeed={0}
//         uStrength={1.5}
//         uFrequency={1.0}
//         uDensity={1.0}
//         shader="defaults"
//         type="plane"
//         lightType="3d"
//         brightness={1.2}
//         reflection={0.1}
//         grain="on"
//         grainBlending={0.15}
//         cDistance={3.6}
//         cPolarAngle={90}
//         cAzimuthAngle={180}
//       />
//     </ShaderGradientCanvas>
//   )
// }


//glass overlay file 

// import React from "react";
// import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

// import GlassBackground from "./RibbedGlassOverlay";

// export default function ShaderBackground() {
//   return (
//     <div
//       className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
//       style={{ zIndex: -1 }}
//       aria-hidden="true"
//     >
//       {/* LAYER 1 — ANIMATED SHADER */}
//       <div className="absolute inset-0 z-0">
//         <ShaderGradientCanvas
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//           }}
//           pixelDensity={1.6}
//           fov={45}
//         >
//           <ShaderGradient
//             animate="on"
//             axesHelper="off"
//             bgColor1="#000000"
//             bgColor2="#000000"
//             brightness={0.8}
//             cAzimuthAngle={180}
//             cDistance={2.9}
//             cPolarAngle={120}
//             cameraZoom={1}
//             color1="#2e1065"
//             color2="#000000"
//             color3="#4c1d95"
//             destination="onCanvas"
//             embedMode="off"
//             envPreset="city"
//             format="gif"
//             frameRate={10}
//             gizmoHelper="hide"
//             grain="off"
//             lightType="3d"
//             positionX={0}
//             positionY={1.8}
//             positionZ={0}
//             range="disabled"
//             rangeEnd={40}
//             rangeStart={0}
//             reflection={0}
//             rotationX={0}
//             rotationY={0}
//             rotationZ={-90}
//             shader="defaults"
//             type="waterPlane"
//             uAmplitude={0}
//             uDensity={1}
//             uFrequency={1.2}
//             uSpeed={0.1}
//             uStrength={1}
//             uTime={0.1}
//             wireframe={true}
//           />
//         </ShaderGradientCanvas>
//       </div>

//       {/* LAYER 2 — GLASS EFFECT OVERLAY */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <GlassBackground />
//       </div>
//     </div>
//   );
// }




//current file 


 import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import  '../App.css';


export default function ShaderBackground() {
  return (
    <div className="shader-background">
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      pixelDensity={1}
      fov={45}
    >
      <ShaderGradient
        animate="on"
        axesHelper="off"
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={0.8}
        cAzimuthAngle={180}
        cDistance={2.9}
        cPolarAngle={120}
        cameraZoom={1}
        color1="#2e1065"
        color2="#000000"
        color3="#4c1d95"
        destination="onCanvas"
        embedMode="off"
        // envPreset="city"
        envPreset="none"
        format="gif"
        fov={45}
        frameRate={10}
        gizmoHelper="hide"
        grain="off"
        lightType="3d"
        pixelDensity={1.6}
        positionX={0}
        positionY={1.8}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0}
        rotationX={0}
        rotationY={0}
        rotationZ={-90}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1}
        uFrequency={1.2}
        uSpeed={0.1}
        uStrength={1}
        uTime={0.1}
        wireframe={true}
      />
    </ShaderGradientCanvas>

     {/* Animated Film Grain Overlay */}
   <div className="grain-overlay" aria-hidden="true" />
</div>
  )
}


