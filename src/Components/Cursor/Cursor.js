import React, { useState, useEffect } from 'react';
import './Cursor.css';
import { motion, useMotionValue, useSpring  } from "framer-motion";

const Cursor = () => {

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX - 3
            const y = e.clientY - 3
            setCursorXY({ x, y })
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
        window.removeEventListener('mousemove', moveCursor)
        }
    }, []);

    const followerX = useMotionValue(-100);
    const followerY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const followerXSpring = useSpring(followerX, springConfig);
    const followerYSpring = useSpring(followerY, springConfig);

    useEffect(() => {
        const moveFollower = (e) => {
            if(document.querySelector('.cursor').classList.contains('active')){
                followerX.set(e.clientX - 45);
                followerY.set(e.clientY - 45);
            }
            else{
                followerX.set(e.clientX - 15);
                followerY.set(e.clientY - 15);
            }
        };

        window.addEventListener("mousemove", moveFollower);

        return () => {
        window.removeEventListener("mousemove", moveFollower);
        };
    });

    return (
        <div>
            <div className="cursor"
                style={{
                    transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
                }} 
            />
            <motion.div className="cursor-follower"
                style={{
                    translateX: followerXSpring,
                    translateY: followerYSpring,
                }}  
            />
        </div>
    );
}

export default Cursor