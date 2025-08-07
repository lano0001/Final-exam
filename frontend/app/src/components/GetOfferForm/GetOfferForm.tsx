import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

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
  laengde: string;
  hoejde: string;
  antalHjorner: string;
  antalEnder: string;
  antalLaager: string;
  bemarkning: string;
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
    laengde: "",
    hoejde: "",
    antalHjorner: "",
    antalEnder: "",
    antalLaager: "",
    bemarkning: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const { error } = await supabase.from("quotes").insert([
      {
        navn: formData.navn,
        email: formData.email,
        adresse: formData.adresse,
        postnr: formData.postnr,
        telefon: formData.telefon,
        hegnstype: formData.hegnstype,
        emne: formData.emne,
        laengde_m: formData.laengde,
        hoejde_cm: formData.hoejde,
        antal_hjorner: parseInt(formData.antalHjorner),
        antal_ender: parseInt(formData.antalEnder),
        antal_laager: formData.antalLaager
          ? parseInt(formData.antalLaager)
          : null,
        bemarkning: formData.bemarkning,
      },
    ]);

    // Error Message
    if (error) {
      console.error("Supabase insert error:", error.message);
      alert("Der opstod en fejl. Prøv igen.");
      return;
    }

    alert("Tak! Dit tilbud er sendt.");

    // Resets form
    setFormData({
      navn: "",
      email: "",
      adresse: "",
      postnr: "",
      telefon: "",
      hegnstype: "",
      emne: "",
      laengde: "",
      hoejde: "",
      antalHjorner: "",
      antalEnder: "",
      antalLaager: "",
      bemarkning: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-around px-4 py-8 ">
      <h2 className="text-3xl md:text-5xl font-semibold my-10">Få et tilbud</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-primary-black p-6 md:p-10 rounded-lg w-full max-w-4xl shadow-lg shadow-primary-black"
      >
        <h2 className="text-center  md:text-2xl mb-6 text-white">
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
            name="laengde"
            placeholder="laengde i meter"
            value={formData.laengde}
            onChange={handleChange}
            error={errors.laengde}
          />
          <TextInput
            name="hoejde"
            placeholder="Hoejde i cm."
            value={formData.hoejde}
            onChange={handleChange}
            error={errors.hoejde}
          />
          <TextInput
            name="antalHjorner"
            placeholder="Antal hjørner"
            value={formData.antalHjorner}
            onChange={handleChange}
            error={errors.antalHjorner}
          />
          <TextInput
            name="antalEnder"
            placeholder="Antal ender på hegnet"
            value={formData.antalEnder}
            onChange={handleChange}
            error={errors.antalEnder}
          />
          <TextInput
            name="antalLaager"
            placeholder="Evt antal låger"
            value={formData.antalLaager}
            onChange={handleChange}
            error={errors.antalLaager}
          />
        </div>

        <div className="mt-4">
          <TextArea
            name="bemarkning"
            placeholder="Bemarkning"
            value={formData.bemarkning}
            onChange={handleChange}
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
