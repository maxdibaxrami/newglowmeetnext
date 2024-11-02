"use client";
import React from "react";
import { Listbox, ListboxItem, Avatar, Badge, Chip } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { FavoriteSmall } from "../icons/chatIcon";

import { ListboxWrapper } from "./listWapper";
import ChatItemMenu from "./chatItemMenu";

const ChatList = () => {
  const router = useRouter();

  const OnPress = () => {
    router.push("/chat");
  };

  const truncateText = (value, maxLength) => {
    if (value.length > maxLength) {
      // If the text is longer than the maximum length, truncate it
      return value.slice(0, maxLength) + "… "; // Concatenate the first 8 chars with {…}
    }

    return value;
  };

  return (
    <ListboxWrapper>
      <Listbox
        classNames={{
          base: "w-full",
          list: "overflow-scroll",
        }}
        items={usersData}
        label="Assigned to"
        variant="solid"
      >
        {(item) => (
          <ListboxItem
            key={item.id}
            endContent={<ChatItemMenu />}
            startContent={
              <Badge
                isOneChar
                className={item.id % 3 !== 0 ? "hidden" : "visible"}
                color="warning"
                content={<FavoriteSmall />}
                placement="top-right"
                size="lg"
              >
                <Badge
                  isOneChar
                  className={item.id % 2 !== 0 ? "hidden" : "visible"}
                  color="success"
                  placement="bottom-right"
                  size="sm"
                >
                  <Avatar
                    isBordered
                    color={item.id % 2 !== 0 ? "default" : "primary"}
                    radius="md"
                    size="lg"
                    src={item.avatar}
                  />
              </Badge>
            </Badge>

            }
            
            textValue={truncateText(item.name, 10)}
            onPress={OnPress}
          >
            <div style={{ width: "100%" }} className="flex gap-2 items-center">
              <div className="flex pl-2 flex-col">
                <span
                  className={
                    item.id % 2 !== 0 ? "text-small text-handller-chat" : "text-small text-handller-chat font-bold"
                  }
                >
                  {item.name}
                  <Chip
                    className={item.id % 2 !== 0 ? "hidden" : "visible ml-1 background-drop--bluebase---darker"}
                    color="primary"
                    size="sm"
                    
                  >
                    +1 New
                  </Chip>
                </span>
                <span
                  className={
                    item.id % 2 !== 0
                      ? "text-tiny text-handller-chat text-default-400"
                      : "text-tiny text-handller-chat font-bold text-default-400"
                  }
                >
                  {item.email}
                </span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
};

export default ChatList;


export const usersData = [
  {
    id: 1,
    name: "Tony",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Olivia",
    role: "CFO",
    team: "Finance",
    status: "active",
    age: "32",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    email: "olivia.bennett@example.com",
  },
  {
    id: 3,
    name: "Liam",
    role: "CTO",
    team: "Technology",
    status: "active",
    age: "35",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    email: "liam.johnson@example.com",
  },
  {
    id: 4,
    name: "Sophia",
    role: "CMO",
    team: "Marketing",
    status: "active",
    age: "29",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "sophia.garcia@example.com",
  },
  {
    id: 5,
    name: "Noah",
    role: "Head of Sales",
    team: "Sales",
    status: "active",
    age: "30",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    email: "noah.wilson@example.com",
  },
  {
    id: 6,
    name: "Emma",
    role: "HR Manager",
    team: "Human Resources",
    status: "active",
    age: "28",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    email: "emma.smith@example.com",
  },
  {
    id: 7,
    name: "James",
    role: "Product Manager",
    team: "Product",
    status: "active",
    age: "33",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    email: "james.brown@example.com",
  },
  {
    id: 8,
    name: "Mia",
    role: "UX Designer",
    team: "Design",
    status: "active",
    age: "26",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "mia.davis@example.com",
  },
  {
    id: 9,
    name: "Ethan",
    role: "Software Engineer",
    team: "Engineering",
    status: "active",
    age: "27",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "ethan.miller@example.com",
  },
  {
    id: 10,
    name: "Harper",
    role: "Data Analyst",
    team: "Analytics",
    status: "active",
    age: "24",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    email: "harper.martinez@example.com",
  },
  {
    id: 11,
    name: "Logan",
    role: "DevOps Engineer",
    team: "Engineering",
    status: "active",
    age: "31",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    email: "logan.garcia@example.com",
  },
  {
    id: 12,
    name: "Ava",
    role: "Content Strategist",
    team: "Content",
    status: "active",
    age: "27",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "ava.lopez@example.com",
  },
  {
    id: 13,
    name: "Jackson",
    role: "Marketing Specialist",
    team: "Marketing",
    status: "active",
    age: "29",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "jackson.martinez@example.com",
  },
  {
    id: 14,
    name: "Isabella",
    role: "Business Analyst",
    team: "Analysis",
    status: "active",
    age: "30",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    email: "isabella.hernandez@example.com",
  },
  {
    id: 15,
    name: "Aiden",
    role: "Web Developer",
    team: "Development",
    status: "active",
    age: "26",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    email: "aiden.robinson@example.com",
  },
  {
    id: 16,
    name: "Ella",
    role: "SEO Specialist",
    team: "SEO",
    status: "active",
    age: "25",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "ella.walker@example.com",
  },
  {
    id: 17,
    name: "Lucas",
    role: "Sales Executive",
    team: "Sales",
    status: "active",
    age: "34",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "lucas.anderson@example.com",
  },
  {
    id: 18,
    name: "Zoe",
    role: "Customer Support",
    team: "Support",
    status: "active",
    age: "22",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    email: "zoe.thomas@example.com",
  },
  {
    id: 19,
    name: "Mason",
    role: "Network Administrator",
    team: "IT",
    status: "active",
    age: "31",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    email: "mason.white@example.com",
  },
  {
    id: 20,
    name: "Chloe",
    role: "Graphic Designer",
    team: "Design",
    status: "active",
    age: "28",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "chloe.thompson@example.com",
  },
];
