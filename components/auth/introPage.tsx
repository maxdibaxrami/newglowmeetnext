"use client";
import { Chip, Avatar, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const IntroPage = ({ nextPage, setLanguage }) => {
  const [isSelected, setIsSelected] = useState("");

  useEffect(() => {
    if (isSelected != "") {
      setLanguage();
    }
  }, [isSelected]);

  return (
    <div className="flex items-center justify-between px-6 flex-col pt-8 pb-4">
      <div>
        <p className="text-base mb-2">Select language for continue: </p>
        <motion.ul
          animate="visible"
          className="container flex gap-2 items-center justify-center flex-wrap"
          initial="hidden"
          variants={container}
        >
          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="en" size="md" src="https://flagcdn.com/gb.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "gb"}
                  radius="full"
                  size="md"
                  onClick={(e) => setIsSelected("gb")}
                />
              }
              size="lg"
              variant="flat"
              onClick={(e) => setIsSelected("gb")}
            >
              English
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="en" size="md" src="https://flagcdn.com/ru.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "ru"}
                  radius="full"
                  size="md"
                  onClick={(e) => setIsSelected("ru")}
                />
              }
              size="lg"
              variant="flat"
              onClick={(e) => setIsSelected("ru")}
            >
              Russian
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="en" size="md" src="https://flagcdn.com/ir.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "fa"}
                  radius="full"
                  size="md"
                  onClick={(e) => setIsSelected("fa")}
                />
              }
              size="lg"
              variant="flat"
              onClick={(e) => setIsSelected("fa")}
            >
              Farsi
            </Chip>
          </motion.li>

          <motion.li className="item" variants={item}>
            <Chip
              avatar={
                <Avatar name="en" size="md" src="https://flagcdn.com/sa.svg" />
              }
              endContent={
                <Checkbox
                  classNames={{ wrapper: "m-0" }}
                  isSelected={isSelected === "sa"}
                  radius="full"
                  size="md"
                  onClick={(e) => setIsSelected("sa")}
                />
              }
              size="lg"
              variant="flat"
              onClick={(e) => setIsSelected("sa")}
            >
              Arabic
            </Chip>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default IntroPage;
