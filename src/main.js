import { Canvas } from "react-three-fiber";
import FrameControl from "./FrameControl";
import SceneControl from "./SceneControl";
import "./index.css";

export default function Main() {
    return (
        <div className="canvas-container">
            <Canvas
                className="main_canvas"
                orthographic
                camera={{ zoom: 15, position: [10, -10, 10], up: [0, 0, 1] }}
            >
                <FrameControl fps={12} />
                <SceneControl />

                <mesh position={[1, 1, 1]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereBufferGeometry attach="geometry" args={[2, 20, 20]} />
                    <meshStandardMaterial attach="material" color="red" />
                </mesh>
                <mesh position={[5, 5, 5]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereBufferGeometry attach="geometry" args={[2, 20, 20]} />
                    <meshStandardMaterial attach="material" color="green" />
                </mesh>
                <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereBufferGeometry attach="geometry" args={[2, 20, 20]} />
                    <meshStandardMaterial attach="material" color="blue" />
                </mesh>
            </Canvas>
        </div>
    );
}
