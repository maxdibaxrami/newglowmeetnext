import {Navbar, NavbarBrand, NavbarContent, Link, Button} from "@nextui-org/react";
import { ArrowRight,ArrowLeft } from "../icons/authIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import {Progress} from "@nextui-org/progress";
import PaginationProfileStepper from "./paginationAuthStepper";

const BottomController = ({nextPage, prevPage, selectedTab}) => {

    const [pageNumber , setPageNumber] = useState(1)
  return (
    <>
    <Navbar className="w-full" isBordered>
        <NavbarContent className="gap-4" justify="start">
            <Button onClick={prevPage} size="lg" className={selectedTab === 0?"hidden":""} isIconOnly color="primary" aria-label="Like">
                <ArrowLeft />
            </Button> 
        </NavbarContent>
        <NavbarContent className="flex gap-4" justify="center">

        </NavbarContent>
        <NavbarContent className="flex gap-4" justify="end">
            <Button className={selectedTab === 6?"hidden":""} onClick={nextPage} size="lg" isIconOnly color="primary" aria-label="Like">
                <ArrowRight />
            </Button> 
        </NavbarContent>
    </Navbar>
    <div className="flex flex-col gap-6 w-full max-w-md">
      <Progress size="sm" aria-label="Loading..." value={16.66 * selectedTab} />
    </div> 
    </>
  );
}

export default BottomController