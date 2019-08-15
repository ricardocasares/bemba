import React from "react";
import { Layout } from "@/components/Layout";
// import { styled } from "@/css/styled";
import { motion } from "framer-motion";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

const items = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: { opacity: 0, y: -5 }
};

export default () => (
  <Layout>
    <motion.ul
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      variants={list}
    >
      <motion.li variants={items}>Hello</motion.li>
      <motion.li variants={items}>World</motion.li>
      <motion.li variants={items}>This is me</motion.li>
      <motion.li variants={items}>Animating something</motion.li>
    </motion.ul>
  </Layout>
);
