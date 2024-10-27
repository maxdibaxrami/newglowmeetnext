import React from "react";
import {
  SelectItem,
  Select,
  DatePicker,
  Input,
  Autocomplete,
  AutocompleteItem,
  Textarea
} from "@nextui-org/react";

const ProfileDataAuth2 = ({nextPage, prevPage}) => {
    return <div className="flex  justify-between flex-col px-6 pt-8 pb-4">
            <form className="flex w-full flex-col gap-4">

            <p className="mb-1 text-left">Fill profile data : </p>
            <Textarea
                label="About me"
                placeholder="Enter your description"
                className="w-full"
              />

              <Select 
                label="Why you are here" 
                className="w-full" 
                >
                {whyYouAreHere.map((item) => (
                  <SelectItem key={item.key}>
                    {item.label}
                  </SelectItem>
                ))}
              </Select>

            </form>
    </div>
}

export default ProfileDataAuth2

  
  const whyYouAreHere = [
    {key: "cat", label: "Cat"},
    {key: "dog", label: "Dog"},
    {key: "elephant", label: "Elephant"},
    {key: "lion", label: "Lion"}
  ]