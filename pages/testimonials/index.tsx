import Head from "next/head";

import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Head>
        <title>Prateek Chachra | Testimonials</title>
        <meta
          property="og:title"
          content="Prateek Chachra | Blog"
          key="title"
        />
      </Head>
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What Coworkers <span className="text-accent">Say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
