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

  const isValidNumber = (value: string) => {
    const trimmed = value.trim();
    return trimmed !== "" && !isNaN(Number(trimmed));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key in keyof FormData]?: boolean } = {};
    let isValid = true;

    for (const key in formData) {
      const value = formData[key as keyof FormData]?.trim();

      if (!value) {
        newErrors[key as keyof FormData] = true;
        isValid = false;
      }

      // Validate number fields
      if (
        ["laengde", "hoejde", "antalHjorner", "antalEnder"].includes(key) &&
        !isValidNumber(value!)
      ) {
        newErrors[key as keyof FormData] = true;
        isValid = false;
      }

      if (key === "antalLaager" && value && !isValidNumber(value)) {
        newErrors[key as keyof FormData] = true;
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (!isValid) {
      alert("Udfyld venligst alle felter korrekt.");
      return;
    }

    const payload = {
      navn: formData.navn.trim(),
      email: formData.email.trim(),
      adresse: formData.adresse.trim(),
      postnr: formData.postnr.trim(),
      telefon: formData.telefon.trim(),
      hegnstype: formData.hegnstype.trim(),
      emne: formData.emne.trim(),
      laengde_m: parseFloat(formData.laengde.trim()),
      hoejde_cm: parseFloat(formData.hoejde.trim()),
      antal_hjorner: parseInt(formData.antalHjorner.trim()),
      antal_ender: parseInt(formData.antalEnder.trim()),
      antal_laager: formData.antalLaager.trim()
        ? parseInt(formData.antalLaager.trim())
        : null,
      bemarkning: formData.bemarkning.trim(),
    };

    console.log("Submitting payload:", payload);

    const { error } = await supabase.from("quotes").insert([payload]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      alert("Der opstod en fejl. Prøv igen.");
      return;
    }

    alert("Tak! Dit tilbud er sendt.");

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
      <h2 className="text-4xl md:text-5xl font-semibold my-10">Få et tilbud</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-primary-black p-6 md:p-10 rounded-lg w-full max-w-4xl shadow-lg shadow-primary-black"
      >
        <h2 className="text-center text-2xl md:text-3xl mb-6 text-white">
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
            placeholder="Længde i meter"
            value={formData.laengde}
            onChange={handleChange}
            error={errors.laengde}
          />
          <TextInput
            name="hoejde"
            placeholder="Højde i cm."
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
            placeholder="Bemærkning"
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
