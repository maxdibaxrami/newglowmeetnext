import React from "react";
import {Modal, ModalContent,SelectItem, Select,ModalFooter , DatePicker, Input, Autocomplete, ModalHeader, AutocompleteItem, Avatar, Button, useDisclosure, ModalBody} from "@nextui-org/react";
import { ProfileIcon, SettingIcon } from "../icons/profileIcon";
import { PenIcon } from "../icons/profileIcon";

const EditIntersting =() => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [values, setValues] = React.useState<Selection>(new Set(["cat", "dog"]));


  const handleOpen = () => {
    onOpen();
  }

  return (
    <>
      <Button size="sm" onPress={() => handleOpen()} className='absolute bottom-1 right-2 z-10' isIconOnly color="default" aria-label="Like">
        <PenIcon />
      </Button>  
      <Modal 
        size={'5xl'} 
        isOpen={isOpen} 
        backdrop="blur"
        onClose={onClose} 
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Edit Intersting</ModalHeader>

            <ModalBody>
                <form className="flex flex-col gap-4">

                    <Select
                        label="Favorite Animal"
                        selectionMode="multiple"
                        placeholder="Select an animal"
                        selectedKeys={values}
                        className="w-full"
                        onSelectionChange={setValues}
                    >
                        {animals.map((animal) => (
                        <SelectItem key={animal.key}>
                            {animal.label}
                        </SelectItem>
                        ))}
                    </Select>
                 </form>
            </ModalBody>

            <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
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
}

export default EditIntersting

export const animals = [
    {key: "cat", label: "Cat"},
    {key: "dog", label: "Dog"},
    {key: "elephant", label: "Elephant"},
    {key: "lion", label: "Lion"},
    {key: "tiger", label: "Tiger"},
    {key: "giraffe", label: "Giraffe"},
    {key: "dolphin", label: "Dolphin"},
    {key: "penguin", label: "Penguin"},
    {key: "zebra", label: "Zebra"},
    {key: "shark", label: "Shark"},
    {key: "whale", label: "Whale"},
    {key: "otter", label: "Otter"},
    {key: "crocodile", label: "Crocodile"}
  ];