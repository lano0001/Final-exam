import React, { useState } from "react";

// Components
import TextInput from "../Reusable_components/TextInput/TextInput";
import TextArea from "../Reusable_components/TextArea/TextArea";

type FormData = {
  navn: string;
  email: string;
  adresse: string;
  postnr: string;
  telefon: string;
  hegnstype: string;
  emne: string;
  længde: string;
  højde: string;
  antalHjørner: string;
  antalEnder: string;
  antalLåger: string;
  bemærkning: string;
};

export default function GetOfferForm() {
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: boolean }>(
    {}
  );
  const [formData, setFormData] = useState<FormData>({
    navn: "",
    email: "",
    adresse: "",
    postnr: "",
    telefon: "",
    hegnstype: "",
    emne: "",
    længde: "",
    højde: "",
    antalHjørner: "",
    antalEnder: "",
    antalLåger: "",
    bemærkning: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handles validation
    const newErrors: { [key in keyof FormData]?: boolean } = {};
    let isValid = true;

    for (const key in formData) {
      if (formData[key as keyof FormData].trim() === "") {
        newErrors[key as keyof FormData] = true;
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    console.log("Submitted data:", formData);
    // TODO: Send to API
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-around px-4 py-8 ">
      <h1 className="text-3xl font-semibold my-10">Få et tilbud</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-primary-black p-6 md:p-10 rounded-lg w-full max-w-4xl shadow-lg shadow-primary-black"
      >
        <h2 className="text-center  md:text-lg mb-6 text-white">
          Indhent tilbud på dit næste hegnprojekt
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            name="navn"
            placeholder="Navn"
            value={formData.navn}
            onChange={handleChange}
            error={errors.navn}
          />
          <TextInput
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextInput
            name="adresse"
            placeholder="Adresse"
            value={formData.adresse}
            onChange={handleChange}
            error={errors.adresse}
          />
          <TextInput
            name="postnr"
            placeholder="Postnr"
            value={formData.postnr}
            onChange={handleChange}
            error={errors.postnr}
          />
          <TextInput
            name="telefon"
            placeholder="Telefon"
            value={formData.telefon}
            onChange={handleChange}
            error={errors.telefon}
          />
          <TextInput
            name="hegnstype"
            placeholder="Hegnstype"
            value={formData.hegnstype}
            onChange={handleChange}
            error={errors.hegnstype}
          />
          <TextInput
            name="emne"
            placeholder="Emne"
            value={formData.emne}
            onChange={handleChange}
            error={errors.emne}
          />
          <TextInput
            name="længde"
            placeholder="Længde i meter"
            value={formData.længde}
            onChange={handleChange}
            error={errors.længde}
          />
          <TextInput
            name="højde"
            placeholder="Højde i cm."
            value={formData.højde}
            onChange={handleChange}
            error={errors.højde}
          />
          <TextInput
            name="antalHjørner"
            placeholder="Antal hjørner"
            value={formData.antalHjørner}
            onChange={handleChange}
            error={errors.antalHjørner}
          />
          <TextInput
            name="antalEnder"
            placeholder="Antal ender på hegnet"
            value={formData.antalEnder}
            onChange={handleChange}
            error={errors.antalEnder}
          />
          <TextInput
            name="antalLåger"
            placeholder="Evt antal låger"
            value={formData.antalLåger}
            onChange={handleChange}
            error={errors.antalLåger}
          />
        </div>

        <div className="mt-4">
          <TextArea
            name="bemærkning"
            placeholder="Bemærkning"
            value={formData.bemærkning}
            onChange={handleChange}
            error={errors.bemærkning}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-accent-green hover:bg-green-800 text-white px-6 py-2 rounded cursor-pointer"
          >
            Indhent tilbud
          </button>
        </div>
      </form>
    </div>
  );
}
