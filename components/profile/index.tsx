"use client";
import { Image, User, Divider, Button } from "@nextui-org/react";
import Link from "next/link";

import {
  PenIcon,
  SettingIcon,
  VerifyIcon,
  PerimumIcon,
} from "../icons/profileIcon";

import DataList from "./dataList";

const ProfilePage = () => {
  return (
    <div
      className="w-full h-full pb-16"
      style={{
        overflow: "scroll",
        maxHeight: "100vh",
        paddingTop: "4rem",
        width:"calc( 100vw - 3rem )"
      }}
    >
      <div className="flex mb-4 w-full justify-between items-center">
        <div className="flex w-full flex-col">
          <div className="w-full" >
            <Image
              alt="Profile hero Image"
              className="w-full h-full"
              classNames={{
                wrapper: "w-full maxcontentimportant",
              }}
              
              loading="lazy"
              src={"https://nextui.org/images/hero-card-complete.jpeg"} // dynamic image URL
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                padding: "10px 10px 5px 10px",
                height: "calc(50vh - 4rem)",

              }}
            />
          </div>

          <div className="flex">
            <div className="w-full">
              <Image
                alt="Profile hero Image"
                className="w-full h-full"
                classNames={{
                  wrapper: "w-full maxcontentimportant",
                }}
                src={"https://nextui.org/images/hero-card-complete.jpeg"} // dynamic image URL
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  padding: "5px 5px 10px 10px",
                  height: "calc(34vh - 4rem)",
                }}
              />
            </div>
            <div className="w-full">
              <Image
                alt="Profile hero Image"
                className="w-full h-full"
                loading="lazy"
                classNames={{
                  wrapper: "w-full maxcontentimportant",
                }}
                src={"https://nextui.org/images/hero-card-complete.jpeg"} // dynamic image URL
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  padding: "5px 10px 10px 5px",
                  height: "calc(34vh - 4rem)",
                  width:"100%"
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/?u=a04258114e29026702d",
              className: "hidden",
            }}
            className="mt-2"
            description="moscow, russia"
            name={"Mahdi bahrami , 24"}
          />

          <div className="flex" style={{ marginTop: "7px", marginLeft: "7px" }}>
            <div>
              <VerifyIcon />
            </div>
            <div style={{ marginLeft: "4px" }}>
              <PerimumIcon />
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-2" />
      <DataList />
    </div>
  );
};

export default ProfilePage;
