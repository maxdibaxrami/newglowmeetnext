import React from "react";
import {
  Modal,
  ModalContent,
  SelectItem,
  Select,
  ModalFooter,
  DatePicker,
  Input,
  Autocomplete,
  ModalHeader,
  AutocompleteItem,
  Avatar,
  Button,
  useDisclosure,
  ModalBody,
  Textarea,
} from "@nextui-org/react";

import { PenIcon } from "../icons/profileIcon";

const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            Edit profile
          </ModalHeader>

          <ModalBody>
            <form className="flex flex-col gap-4">
              <Input label="Name" type="text" />
              <DatePicker className="w-full" label="Birth date" />
              <Textarea
                className="w-full"
                label="About me"
                placeholder="Enter your description"
              />

              <Select className="w-full" label="Why you are here">
                {whyYouAreHere.map((item) => (
                  <SelectItem key={item.key}>{item.label}</SelectItem>
                ))}
              </Select>

              <Autocomplete className="w-full" label="Select country">
                <AutocompleteItem
                  key="argentina"
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ar.svg"
                    />
                  }
                >
                  Argentina
                </AutocompleteItem>
                <AutocompleteItem
                  key="venezuela"
                  startContent={
                    <Avatar
                      alt="Venezuela"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ve.svg"
                    />
                  }
                >
                  Venezuela
                </AutocompleteItem>
                <AutocompleteItem
                  key="brazil"
                  startContent={
                    <Avatar
                      alt="Brazil"
                      className="w-6 h-6"
                      src="https://flagcdn.com/br.svg"
                    />
                  }
                >
                  Brazil
                </AutocompleteItem>
                <AutocompleteItem
                  key="switzerland"
                  startContent={
                    <Avatar
                      alt="Switzerland"
                      className="w-6 h-6"
                      src="https://flagcdn.com/ch.svg"
                    />
                  }
                >
                  Switzerland
                </AutocompleteItem>
                <AutocompleteItem
                  key="germany"
                  startContent={
                    <Avatar
                      alt="Germany"
                      className="w-6 h-6"
                      src="https://flagcdn.com/de.svg"
                    />
                  }
                >
                  Germany
                </AutocompleteItem>
                <AutocompleteItem
                  key="spain"
                  startContent={
                    <Avatar
                      alt="Spain"
                      className="w-6 h-6"
                      src="https://flagcdn.com/es.svg"
                    />
                  }
                >
                  Spain
                </AutocompleteItem>
                <AutocompleteItem
                  key="france"
                  startContent={
                    <Avatar
                      alt="France"
                      className="w-6 h-6"
                      src="https://flagcdn.com/fr.svg"
                    />
                  }
                >
                  France
                </AutocompleteItem>
                <AutocompleteItem
                  key="italy"
                  startContent={
                    <Avatar
                      alt="Italy"
                      className="w-6 h-6"
                      src="https://flagcdn.com/it.svg"
                    />
                  }
                >
                  Italy
                </AutocompleteItem>
                <AutocompleteItem
                  key="mexico"
                  startContent={
                    <Avatar
                      alt="Mexico"
                      className="w-6 h-6"
                      src="https://flagcdn.com/mx.svg"
                    />
                  }
                >
                  Mexico
                </AutocompleteItem>
              </Autocomplete>

              <Select
                className="w-full"
                items={LookingForItems}
                label="Looking for"
                placeholder="Looking for"
              >
                {(LookingForItems) => (
                  <SelectItem>{LookingForItems.label}</SelectItem>
                )}
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

export default EditProfile;

const LookingForItems = [
  { key: "b", label: "Boys" },
  { key: "G", label: "Girls" },
  { key: "b2", label: "Both" },
];

const whyYouAreHere = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
];
