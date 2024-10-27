import React from "react";
import {
  SelectItem,
  Select,
  DatePicker,
  Input,
  Autocomplete,
  AutocompleteItem,
  Avatar,
} from "@nextui-org/react";

const ProfileDataAuth = ({ nextPage, prevPage }) => {
  return (
    <div className="flex  justify-between flex-col px-6 pt-8 pb-4">
      <form className="flex w-full flex-col gap-4">
        <p className="mb-1 text-left">Fill profile data : </p>

        <Input label="Name" type="text" />
        <DatePicker
          showMonthAndYearPickers
          className="text-left"
          label="Birth Date"
        />
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
    </div>
  );
};

export default ProfileDataAuth;

const LookingForItems = [
  { key: "b", label: "Boys" },
  { key: "G", label: "Girls" },
  { key: "b2", label: "Both" },
];
