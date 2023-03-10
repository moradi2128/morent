import { motion } from "framer-motion";
import { containerVariants } from "src/motionVariants";

const AnimationLayout = ({ children }) => (
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        {children}
    </motion.div>
);
export default AnimationLayout