import React from "react";
import {
  Modal,
  ModalContent,
  SelectItem,
  Select,
  ModalFooter,
  ModalHeader,
  Button,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";

import { PenIcon } from "../icons/profileIcon";

const EditIntersting = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = React.useState<Selection>(
    new Set(["cat", "dog"]),
  );

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        isIconOnly
        aria-label="Like"
        className="absolute bottom-1 right-2 z-10"
        color="default"
        size="sm"
        onPress={() => handleOpen()}
      >
        <PenIcon />
      </Button>
      <Modal backdrop="blur" isOpen={isOpen} size={"5xl"} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Edit Intersting
          </ModalHeader>

          <ModalBody>
            <form className="flex flex-col gap-4">
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
          </ModalBody>

          <ModalFooter>
            <Button color="default" variant="solid" onPress={onClose}>
              Close
            </Button>
            <Button color="success" onPress={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditIntersting;

export const animals = [
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
