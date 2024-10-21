'use client'
import {Image, User, Divider, Button} from "@nextui-org/react";
import { ProfileIcon } from "../icons/profileIcon";
import ProfileProgress from "./profileProgress";
import ProfileActivity from "./profileActivity";
import DataList from "./dataList";

const ProfilePage = () => {
    return <div className='w-full h-full px-6 pb-16'>
                <div className="flex justify-between items-center">
                    <div className="flex">
                <div className="w-1/2">
                    <Image
                        className="w-full h-full"
                        alt="NextUI hero Image"
                        height={312}
                        style={{objectFit:"cover",borderRadius:"14px 0px 0px 14px"}}
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />
                </div>

                <div className="w-1/2 flex flex-col">
                    <div className="w-full">
                        <Image
                        className="w-full h-full twin-profile"
                        alt="NextUI hero Image"
                        height={156}

                        style={{objectFit:"cover",borderRadius:"0px 14px 0px 0px"}}
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />
                    </div>
                    <div className="w-full ">
                    <Image
                        className="w-full h-full twin-profile"
                        style={{objectFit:"cover",borderRadius:"0px 0px 14px 0px"}}
                        alt="NextUI hero Image"
                        height={156}

                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        />
                    </div>
                </div>

                    </div>
                    
                </div>
                <div className="flex items-center justify-between mt-2">

                <User   
                            name="Mahdi bahrami , 24"
                            description="moscow, russia"
                            className="mt-2"
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                className:"hidden"
                            }}
                            />

                <Button color="primary" variant="solid" startContent={<ProfileIcon/>}>
                    Edit
                </Button>
                </div>
                        

                    <Divider className="my-2" />
                <DataList/>
                  
            </div>
}

export default ProfilePage