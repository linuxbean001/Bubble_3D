import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import React, { useRef } from "react";
import { Euler } from "three";

const SceneControl = () => {
    const controlRef = useRef();

    return (
        <>
            <ambientLight />
            <pointLight position={[100, 100, 100]} />
            <GizmoHelper
                alignment="bottom-left"
                margin={[60, 60]}
                onTarget={() => controlRef.current?.target}
                onUpdate={() => controlRef.current?.update?.()}
            >
                <GizmoViewport
                    axisColors={["red", "green", "blue"]}
                    labelColor="white"
                />
            </GizmoHelper>
            <OrbitControls ref={controlRef} enableDamping={false} />
            <gridHelper scale={[1,1,1]} args={[30, 200, "black", "grey"]} rotation={new Euler(Math.PI / 2, 0, 0)} />
            <gridHelper scale={[1,1,1]} args={[30, 200, "black", "grey"]} />
            <gridHelper scale={[1,1,1]} args={[30, 200, "black", "grey"]} rotation={new Euler(Math.PI / 2, 0, 33)} />
        </>
    );
};

export default SceneControl;
