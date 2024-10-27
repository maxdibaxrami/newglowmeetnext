import React from "react";
import { SelectItem, Select } from "@nextui-org/react";

const InterestingAuth = ({ nextPage, prevPage }) => {
  const [values, setValues] = React.useState<Selection>(
    new Set(["cat", "dog"]),
  );

  return (
    <div className="flex  justify-between flex-col px-6 pt-8 pb-4">
      <form className="flex w-full flex-col gap-4">
        <p className="mb-1 text-left">Interesting : </p>
        <Select
          className="w-full"
          label="Favorite Animal"
          placeholder="Select an animal"
          selectedKeys={values}
          selectionMode="multiple"
          onSelectionChange={setValues}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </form>
    </div>
  );
};

export default InterestingAuth;

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
