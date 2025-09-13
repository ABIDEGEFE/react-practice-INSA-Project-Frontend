import React from "react";
import { Button } from "../Common/button";
import { useState } from "react";
import { wait } from "@testing-library/user-event/dist/utils";


export function useButton() {
    const [isSaving, setIsSaving] = useState(false);
    const [buttonText, setButtonText] = useState(false);

const handleSubmit = async () => {
  // console.log("Form submitted", buttonText);
  setIsSaving(true);
  wait(2000).then(() => {
    setIsSaving(false);
    setButtonText(true);
    });
 

}
const buttonLabel= () => {
  // if (!isSaving && !buttonText) {
  //   return 'Submit';
  // } else if (isSaving && !buttonText) {
  //   return 'Saving...';
  // } else if (!isSaving && buttonText) {
  //   return 'Saved';
  // }
  if (isSaving) {return 'Saving...'};
  console.log(buttonText);
  if (buttonText) {return 'Saved'};
  return 'Submit';

}
// In your form:
  return(
    <div>
        <Button variant="success" size="lg" type="submit" loading={isSaving} onClick={handleSubmit}>
          {buttonLabel()} 
        </Button>
        <Button size="sm">{buttonLabel()}</Button>
    </div>
  ) 
}
