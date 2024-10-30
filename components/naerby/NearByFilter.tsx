import React,{useState} from "react";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Button,
  useDisclosure,
  ModalBody,
  Slider,
  ButtonGroup,
  Switch
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { OptionInExplore } from "../icons/exploreIcons";
import { LocationIcon } from "../icons/NearByMeIcons";

const NearByFilter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSelected, setIsSelected] = useState(true);

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Button
        isIconOnly
        aria-label="Like"
        className="ml-2"
        color="default"
        size="md"
        variant="light"
        onPress={() => handleOpen()}
      >
        <OptionInExplore />
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        size={"5xl"}
        style={{ zIndex: "1000" }}
        onClose={onClose}
        classNames={{
          base:"absolute z-50	"
        }}
      >
        <ModalContent className="absolute">
          <ModalHeader className="flex flex-col gap-1">Set filters</ModalHeader>

          <ModalBody>
            <form className="flex flex-col gap-4">
            <Switch
              defaultSelected
              isSelected={isSelected} 
              onValueChange={setIsSelected}
              size="md"
              color="primary"
              thumbIcon={()=> <LocationIcon />}
            >
              Search by distance
            </Switch>
            {isSelected? (
              <ButtonGroup style={{height:"4rem"}} className="w-full flex py-4">
                <Button className="grow">My city</Button>
                <Button className="grow">My country</Button>
                <Button className="grow">Globally</Button>
              </ButtonGroup>
            ) :(
              <Slider   
                  size="md"
                  step={50}
                  color="secondary"
                  label="Distance (km)"
                  showSteps={true} 
                  style={{height:"4rem"}}
                  maxValue={500} 
                  minValue={50} 
                  defaultValue={150}
                  className="max-w-md" 
                />
              
            )}
              

              <Slider
                className="w-full"
                defaultValue={[18, 28]}
                label="Age"
                maxValue={100}
                minValue={18}
                step={1}
              />
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

export default NearByFilter;

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

const LookingForItems = [
  { key: "b", label: "Boys" },
  { key: "G", label: "Girls" },
  { key: "b2", label: "Both" },
];