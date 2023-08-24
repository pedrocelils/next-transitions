import {motion, AnimatePresence } from "framer-motion";
import {useRouter} from "next/router"
import { Component } from "react";
import "./global.css"

const App = ({ Component, pageProps}) => {
    const router = useRouter();

    return (
        <AnimatePresence mode="await">
            <motion.div key={router.pathname}>
                <Component {...pageProps} />

                <motion.div className="slide-in"
                    initial={{scaleY: 0}}
                    animate={{scaleY: 0}}
                    exit={{sacleY: 1}}
                    transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}>
                </motion.div>

                <motion.div className="slide-out"
                    initial={{scaleY: 1}}
                    animate={{scaleY: 0}}
                    exit={{sacleY: 1}}
                    transition={{duration:1, ease: [0.22, 1, 0.36, 1]}}>
                </motion.div>
            </motion.div>
        </AnimatePresence>

       
    );
};

export default App;