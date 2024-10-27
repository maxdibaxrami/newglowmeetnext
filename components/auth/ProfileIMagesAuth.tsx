import React from "react";
import { Image, Button } from "@nextui-org/react";

import { PenIcon } from "../icons/profileIcon";

const ImageDataAuth = ({ nextPage, prevPage }) => {
  return (
    <div className="flex  justify-between flex-col px-6 pt-8 pb-4">
      <form className="flex w-full flex-col gap-4">
        <p className="mb-1 text-left">Upload profile Image : </p>
        <div className="w-full h-full px-2 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="w-1/2 relative">
                <Image
                  alt="NextUI hero Image"
                  className="w-full h-full"
                  height={312}
                  src="https://conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png"
                  style={{
                    objectFit: "cover",
                    borderRadius: "14px 0px 0px 14px",
                  }}
                />

                <Button
                  isIconOnly
                  aria-label="Like"
                  className="absolute bottom-1 right-2 z-10"
                  color="primary"
                  size="sm"
                >
                  <PenIcon />
                </Button>
              </div>

              <div className="w-1/2 flex flex-col">
                <div className="w-full relative">
                  <Image
                    alt="NextUI hero Image"
                    className="w-full h-full twin-profile"
                    height={156}
                    src="https://conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0px 14px 0px 0px",
                    }}
                  />

                  <Button
                    isIconOnly
                    aria-label="Like"
                    className="absolute bottom-1 right-2 z-10"
                    color="primary"
                    size="sm"
                  >
                    <PenIcon />
                  </Button>
                </div>
                <div className="w-full relative">
                  <Image
                    alt="NextUI hero Image"
                    className="w-full h-full twin-profile"
                    height={156}
                    src="https://conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png"
                    style={{
                      objectFit: "cover",
                      borderRadius: "0px 0px 14px 0px",
                    }}
                  />

                  <Button
                    isIconOnly
                    aria-label="Like"
                    className="absolute bottom-1 right-2 z-10"
                    color="primary"
                    size="sm"
                  >
                    <PenIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageDataAuth;
