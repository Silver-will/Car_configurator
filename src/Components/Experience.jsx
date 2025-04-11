import { OrbitControls, Environment, Center,AccumulativeShadows,RandomizedLight, Lightformer } from "@react-three/drei";
import { easing } from 'maath'
import { useLayoutEffect, useRef, useState } from 'react'
import { state } from './store'
import { Lambo } from "./Lambo";

export default function ()
{
    const [degraded, degrade] = useState(false)
    return (<>
        <group position={[0, -0.75, 0]}>
           
                <ambientLight intensity={0.5} />
                <Lambo />
                <AccumulativeShadows position={[0, 1.2, 0]} temporal frames={100} toneMapped={true} alphaTest={0.75} opacity={2} scale={25}>
                    <RandomizedLight amount={7} ambient={0.5} mapSize={1024} size={100} near={0.1} far={5000} position={[3, 7, 0]} />
                </AccumulativeShadows>
        </group>
        <OrbitControls makeDefault minPolarAngle={0.8} maxPolarAngle={Math.PI / 2} />
        <Environment preset="studio" frames={degraded ? 1 : Infinity} resolution={256} blur={1} background={false}>
            <Lightformer/>
        </Environment>
        </>
    )
}