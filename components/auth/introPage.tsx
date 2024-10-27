"use client"
import {Chip, Avatar, Checkbox} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const IntroPage = ({nextPage, setLanguage}) => {

    const [isSelected, setIsSelected] = useState("")
    useEffect(()=>{if(isSelected != ""){setLanguage()} },[isSelected])

    return <div className="flex items-center justify-between px-6 flex-col pt-8 pb-4">
        <div>
            <p className="text-base mb-2">Select language for continue: </p>
            <motion.ul
                className="container flex gap-2 items-center justify-center flex-wrap"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                
                <motion.li className="item" variants={item} >
                    <Chip
                        variant="flat"
                        size="lg"
                        onClick={e=> setIsSelected("gb")}
                        endContent={<Checkbox onClick={e=> setIsSelected("gb")} isSelected={isSelected==="gb"}  classNames={{wrapper:"m-0"}}  radius="full" size="md"/>}
                        avatar={
                            <Avatar
                                name="en"
                                size="md"
                                src="https://flagcdn.com/gb.svg"
                            />
                            }
                        >
                        English
                    </Chip>
                </motion.li>

                <motion.li className="item" variants={item} >
                    <Chip
                        variant="flat"
                        onClick={e=> setIsSelected("ru")}
                        size="lg"
                        endContent={<Checkbox onClick={e=> setIsSelected("ru")} isSelected={isSelected==="ru"}  classNames={{wrapper:"m-0"}}  radius="full" size="md"/>}
                        avatar={
                            <Avatar
                                name="en"
                                size="md"
                                src="https://flagcdn.com/ru.svg"
                            />
                            }
                        >
                        Russian
                    </Chip>
                </motion.li>

                <motion.li className="item" variants={item} >
                    <Chip
                        variant="flat"
                        size="lg"
                        onClick={e=> setIsSelected("fa")} 
                        endContent={<Checkbox onClick={e=> setIsSelected("fa")} isSelected={isSelected==="fa"} classNames={{wrapper:"m-0"}}  radius="full" size="md"/>}
                        avatar={
                            <Avatar
                                name="en"
                                size="md"
                                src="https://flagcdn.com/ir.svg"
                            />
                            }
                        >
                        Farsi
                    </Chip>
                </motion.li>

                <motion.li className="item" variants={item}>
                    <Chip
                        variant="flat"
                        size="lg"
                        onClick={e=> setIsSelected("sa")}
                        endContent={<Checkbox onClick={e=> setIsSelected("sa")} isSelected={isSelected==="sa"}  classNames={{wrapper:"m-0"}}  radius="full" size="md"/>}
                        avatar={
                            <Avatar
                                name="en"
                                size="md"
                                src="https://flagcdn.com/sa.svg"
                            />
                            }
                        >
                        Arabic
                    </Chip>
                </motion.li>
                
            </motion.ul>
        </div>
        
        
    </div>
}

export default IntroPage