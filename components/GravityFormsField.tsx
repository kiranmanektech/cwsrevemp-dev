import { FormField, FieldError } from "../generated/graphql";
import AddressField from "./GravityFormsFields/AddressField";
import CheckboxField from "./GravityFormsFields/CheckboxField";
import DateField from "./GravityFormsFields/DateField";
import EmailField from "./GravityFormsFields/EmailField";
import MultiSelectField from "./GravityFormsFields/MultiSelectField";
import NameField from "./GravityFormsFields/NameField";
import PhoneField from "./GravityFormsFields/PhoneField";
import NumberField from "./GravityFormsFields/NumberField";
import RadioField from "./GravityFormsFields/RadioField";
import SelectField from "./GravityFormsFields/SelectField";
import TextField from "./GravityFormsFields/TextField";
import TextAreaField from "./GravityFormsFields/TextAreaField";
import TimeField from "./GravityFormsFields/TimeField";
import WebsiteField from "./GravityFormsFields/WebsiteField";

interface Props {
  field: FormField;
  fieldErrors: FieldError[];
}

export default function GravityFormsField({ field, fieldErrors }: Props) {
  switch (field.type) {
    case "ADDRESS":
      return <AddressField field={field} fieldErrors={fieldErrors} />;
    case "CHECKBOX":
      return <CheckboxField field={field} fieldErrors={fieldErrors} />;
    case "DATE":
      return <DateField field={field} fieldErrors={fieldErrors} />;
    case "EMAIL":
      return <EmailField field={field} fieldErrors={fieldErrors} />;
    case "MULTISELECT":
      return <MultiSelectField field={field} fieldErrors={fieldErrors} />;
    case "NAME":
      return <NameField field={field} fieldErrors={fieldErrors} />;
    case "PHONE":
      return <PhoneField field={field} fieldErrors={fieldErrors} />;
    case "NUMBER":
      return <NumberField field={field} fieldErrors={fieldErrors} />;
    case "RADIO":
      return <RadioField field={field} fieldErrors={fieldErrors} />;
    case "SELECT":
      return <SelectField field={field} fieldErrors={fieldErrors} />;
    case "TEXT":
      return <TextField field={field} fieldErrors={fieldErrors} />;
    case "TEXTAREA":
      return <TextAreaField field={field} fieldErrors={fieldErrors} />;
    case "TIME":
      return <TimeField field={field} fieldErrors={fieldErrors} />;
    case "WEBSITE":
      return <WebsiteField field={field} fieldErrors={fieldErrors} />;
    default:
      return <p>{`Field type not supported: ${field.type}.`}</p>;
  }
}
