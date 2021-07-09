import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Clock } from "three";

const FrameControl = ({ fps }) => {
    const clockRef = useRef(new Clock());

    useFrame((state) => {
        state.ready = false;
        const timeUntilNextFrame = 1000 / fps - clockRef.current.getDelta();

        setTimeout(() => {
            if (state && state.invalidate) {
                state.ready = true;
                state.invalidate();
            }
        }, Math.max(0, timeUntilNextFrame));
    });

    return <></>;
};

export default FrameControl;
