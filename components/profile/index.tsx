"use client";
import { Image, User, Divider, Button } from "@nextui-org/react";
import Link from "next/link";

import { PenIcon, SettingIcon } from "../icons/profileIcon";

import DataList from "./dataList";

const ProfilePage = () => {
  return (
    <div className="w-full  h-full px-6 pb-16">
      <div className="flex mt-4 justify-between items-center">
        <div className="flex">
          <div className="w-1/2">
            <Image
              alt="NextUI hero Image"
              className="w-full h-full"
              height={312}
              src="https://nextui.org/images/hero-card-complete.jpeg"
              style={{ objectFit: "cover", borderRadius: "14px 0px 0px 14px" }}
            />
          </div>

          <div className="w-1/2 flex flex-col">
            <div className="w-full">
              <Image
                alt="NextUI hero Image"
                className="w-full h-full twin-profile"
                height={156}
                src="https://nextui.org/images/hero-card-complete.jpeg"
                style={{ objectFit: "cover", borderRadius: "0px 14px 0px 0px" }}
              />
            </div>
            <div className="w-full ">
              <Image
                alt="NextUI hero Image"
                className="w-full h-full twin-profile"
                height={156}
                src="https://nextui.org/images/hero-card-complete.jpeg"
                style={{ objectFit: "cover", borderRadius: "0px 0px 14px 0px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            className: "hidden",
          }}
          className="mt-2"
          description="moscow, russia"
          name="Mahdi bahrami , 24"
        />

        <div className="flex">
          <Link href={"/editprofile"}>
            <Button
              isIconOnly
              className="m-1"
              color="primary"
              startContent={<PenIcon />}
              variant="solid"
            />
          </Link>

          <Link href={"/setting"}>
            <Button
              isIconOnly
              className="m-1"
              color="primary"
              startContent={<SettingIcon />}
              variant="solid"
            />
          </Link>
        </div>
      </div>

      <Divider className="my-2" />
      <DataList />
    </div>
  );
};

export default ProfilePage;
