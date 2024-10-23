import React from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  Input,
  ModalHeader,
  Button,
  useDisclosure,
  ModalBody,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { PenIcon } from "../icons/profileIcon";

const ExploreFilter = () => {
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
            Edit more about me
          </ModalHeader>

          <ModalBody>
            <form className="flex flex-col gap-4">
              <Select
                className="w-full"
                items={RealationStatus}
                label="Kids"
                placeholder="Kids"
              >
                {(RealationStatus) => (
                  <SelectItem>{RealationStatus.label}</SelectItem>
                )}
              </Select>

              <Input label="height" type="number" />

              <Select
                className="w-full"
                items={KidStatus}
                label="Realation status"
                placeholder="Realation status"
              >
                {(KidStatus) => <SelectItem>{KidStatus.label}</SelectItem>}
              </Select>

              <Select
                className="w-full"
                label="Languages"
                placeholder="Languages"
                selectionMode="multiple"
              >
                {languages.map((languages) => (
                  <SelectItem key={languages.key}>{languages.label}</SelectItem>
                ))}
              </Select>

              <Select
                className="w-full"
                items={SexualityStatus}
                label="Sexuality"
                placeholder="Sexuality"
              >
                {(SexualityStatus) => (
                  <SelectItem>{SexualityStatus.label}</SelectItem>
                )}
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
};

export default ExploreFilter;

export const RealationStatus = [
  { key: "cat", label: "Single" },
  { key: "dog", label: "Taken" },
  { key: "elephant", label: "open" },
  { key: "lion", label: "I’d rather not say" },
];

export const KidStatus = [
  { key: "cat", label: "Some day" },
  { key: "dog", label: "i have already" },
  { key: "elephant", label: "I don’t want kids" },
  { key: "lion", label: "I’d rather not say" },
];

const SexualityStatus = [
  { key: "straight", label: "Straight" },
  { key: "gay", label: "Gay" },
  { key: "lesbian", label: "Lesbian" },
  { key: "bisexual", label: "Bisexual" },
  { key: "asexual", label: "Asexual" },
  { key: "pansexual", label: "Pansexual" },
  { key: "queer", label: "Queer" },
  { key: "questioning", label: "Questioning" },
];
const languages = [
  { key: "en", label: "English" },
  { key: "es", label: "Spanish" },
  { key: "fr", label: "French" },
  { key: "de", label: "German" },
  { key: "it", label: "Italian" },
  { key: "zh", label: "Chinese" },
  { key: "ja", label: "Japanese" },
  { key: "ko", label: "Korean" },
  { key: "ru", label: "Russian" },
  { key: "ar", label: "Arabic" },
  { key: "pt", label: "Portuguese" },
  { key: "hi", label: "Hindi" },
  { key: "bn", label: "Bengali" },
  { key: "pa", label: "Punjabi" },
  { key: "vi", label: "Vietnamese" },
  { key: "ur", label: "Urdu" },
  { key: "fa", label: "Persian" },
  { key: "tr", label: "Turkish" },
  { key: "id", label: "Indonesian" },
  { key: "th", label: "Thai" },
  { key: "ms", label: "Malay" },
  { key: "pl", label: "Polish" },
  { key: "nl", label: "Dutch" },
  { key: "sv", label: "Swedish" },
  { key: "no", label: "Norwegian" },
  { key: "fi", label: "Finnish" },
  { key: "da", label: "Danish" },
  { key: "he", label: "Hebrew" },
  { key: "el", label: "Greek" },
  { key: "hu", label: "Hungarian" },
  { key: "cs", label: "Czech" },
  { key: "ro", label: "Romanian" },
  { key: "bg", label: "Bulgarian" },
  { key: "uk", label: "Ukrainian" },
  { key: "sr", label: "Serbian" },
  { key: "sk", label: "Slovak" },
  { key: "hr", label: "Croatian" },
  { key: "lt", label: "Lithuanian" },
  { key: "lv", label: "Latvian" },
  { key: "et", label: "Estonian" },
];
