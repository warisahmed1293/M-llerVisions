"use client";
import groupShape from "@/../public/image/group-4.png";
import bottomShape from "@/../public/image/shape-14.png";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutWhatIDo = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card what-i-do p-32px"
    >
      <p className="heading-4">Unser können</p>
      <div className="what-i-do__content">
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Webdesign</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Analytics & Reporting</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Social Media Content Creation</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Performance Markteting</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Logo/Flyer/Visitenkarten</p>
        </div>
      </div>
      <Image
        src={bottomShape}
        width={95}
        height={95}
        alt="Bottom Shape"
        className="bottom-shape light-mood-image-shape"
      />
      <Image
        src={groupShape}
        width={47}
        height={71}
        alt="Bottom Shape"
        className="group-shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default AboutWhatIDo;
