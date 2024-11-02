import { Navbar, NavbarContent, Button } from "@nextui-org/react";
import { useState } from "react";
import { Progress } from "@nextui-org/progress";

import { ArrowRight, ArrowLeft } from "../icons/authIcon";

const BottomController = ({ nextPage, prevPage, selectedTab }) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Navbar isBordered className="w-full">
        <NavbarContent className="gap-4" justify="start">
          <Button
            isIconOnly
            aria-label="Like"
            className={selectedTab === 0 ? "hidden" : ""}
            color="primary"
            size="lg"
            onClick={prevPage}
          >
            <ArrowLeft />
          </Button>
        </NavbarContent>
        <NavbarContent className="flex gap-4" justify="center" />
        <NavbarContent className="flex gap-4" justify="end">
          <Button
            isIconOnly
            aria-label="Like"
            className={selectedTab === 6 ? "hidden" : ""}
            color="primary"
            size="lg"
            onClick={nextPage}
          >
            <ArrowRight />
          </Button>
        </NavbarContent>
      </Navbar>
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Progress
          aria-label="Loading..."
          radius="none"
          size="lg"
          value={16.66 * selectedTab}
        />
      </div>
    </>
  );
};

export default BottomController;
