"use client";

import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { createProject, uploadFile } from "../../../utils/actions";
import Title from "@/components/ui/title";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AddProjectForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [numOfImages, setNumOfImages] = useState(0);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setNumOfImages(files.length);
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(previews);
      setImages(Array.from(files));
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const imageUrls = await Promise.all(
      images.map(async (file) => {
        const fileFormData = new FormData();
        fileFormData.append("file", file);
        return await uploadFile(fileFormData);
      })
    );

    formData.append("imageUrls", JSON.stringify(imageUrls));

    try {
      await createProject(formData);
      router.push("/#projects");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const BtnSubmit = () => {
    const { pending } = useFormStatus();
    return (
      <button
        disabled={pending}
        type="submit"
        className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-cyan-600 my-4"
      >
        {pending ? "Création en cours..." : "Ajouter"}
      </button>
    );
  };

  if (status === "loading") {
    return <div>Loading...</div>; // Affiche un état de chargement pendant que la session est vérifiée
  }

  return (
    <section id="add-project">
      <div className="container pt-5 mb-14">
        <Title title="Nouveau projet" subTitle="Ajouter un nouveau projet" />
        <div className="flex lg:w-[70%] mx-auto  flex-col-reverse lg:flex-row items-center lg:items-start justify-between md:p-8 rounded-xl bg-secondary cardShadow">
          <div className="w-full p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="client" className="block text-sm font-medium">
                  Client du projet
                </label>
                <input
                  type="text"
                  id="client"
                  name="client"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium"
                >
                  Description du projet
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="mt-1 block w-full bg-slate-200 dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium">
                  Date du projet
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="images" className="block text-sm font-medium">
                  Ajouter des images
                </label>
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreviews.length > 0 &&
                imagePreviews.map((preview, index) => (
                  <div key={index} className=" relative mx-auto object-contain">
                    <Image
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      width={300}
                      height={100}
                    />
                  </div>
                ))}

              {Array.from({ length: numOfImages }).map((_, index) => (
                <div key={index}>
                  <label
                    htmlFor={`altTexts[${index}]`}
                    className="block text-sm font-medium"
                  >
                    Texte alternatif pour l'image {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`altTexts[${index}]`}
                    name={`altTexts[${index}]`}
                    className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="contexte" className="block text-sm font-medium">
                  Contexte du projet
                </label>
                <textarea
                  id="contexte"
                  name="contexte"
                  rows={4}
                  className="mt-1 block w-full bg-slate-200 dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="approche" className="block text-sm font-medium">
                  Approche du projet
                </label>
                <textarea
                  id="approche"
                  name="approche"
                  rows={4}
                  className="mt-1 block w-full bg-slate-200 dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="tags" className="block text-sm font-medium">
                  Tags du projet (séparés par des virgules)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="logo" className="block text-sm font-medium">
                  Ajouter un logo
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                />
              </div>
              <div>
                <label htmlFor="github" className="block text-sm font-medium">
                  Lien GitHub du projet
                </label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  className="bg-slate-200 mt-1 block w-full dark:text-primary-foreground border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 py-2"
                  required
                />
              </div>
              <BtnSubmit />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProjectForm;
