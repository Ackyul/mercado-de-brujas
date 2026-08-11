"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { EDITIONS_DATA, Edition, EditionPhoto } from "../data/editionsData";

interface EditionsContextType {
  editions: Edition[];
  addEdition: (edition: Omit<Edition, "id" | "slug" | "gallery"> & { slug?: string }) => Edition;
  updateEdition: (slug: string, updatedFields: Partial<Edition>) => void;
  deleteEdition: (slug: string) => void;
  toggleEditionStatus: (slug: string) => void;
  addPhotoToEdition: (editionSlug: string, photo: Omit<EditionPhoto, "id">) => void;
  deletePhotoFromEdition: (editionSlug: string, photoId: string) => void;
}

const EditionsContext = createContext<EditionsContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "mercado_brujas_editions_v1";

export function EditionsProvider({ children }: { children: React.ReactNode }) {
  const [editions, setEditions] = useState<Edition[]>(EDITIONS_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved editions from localStorage AFTER initial client mount to prevent SSR hydration mismatch
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setEditions(parsed);
          }
        } catch (e) {
          console.error("Error parsing saved editions", e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Sync state to localStorage on state change (only after initial load)
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(editions));
    }
  }, [editions, isLoaded]);

  const addEdition = (editionData: Omit<Edition, "id" | "slug" | "gallery"> & { slug?: string }): Edition => {
    const num = editionData.number || editions.length + 1;
    const generatedSlug = editionData.slug || `edicion-${num}`;
    const newEdition: Edition = {
      ...editionData,
      id: `ed-${num}-${Date.now()}`,
      slug: generatedSlug,
      number: num,
      gallery: [],
    };

    setEditions((prev) => [newEdition, ...prev]);
    return newEdition;
  };

  const updateEdition = (slug: string, updatedFields: Partial<Edition>) => {
    setEditions((prev) =>
      prev.map((ed) => (ed.slug === slug ? { ...ed, ...updatedFields } : ed))
    );
  };

  const deleteEdition = (slug: string) => {
    setEditions((prev) => prev.filter((ed) => ed.slug !== slug));
  };

  const toggleEditionStatus = (slug: string) => {
    setEditions((prev) =>
      prev.map((ed) => {
        if (ed.slug === slug) {
          const newStatus: "Próxima" | "Realizada" = ed.status === "Próxima" ? "Realizada" : "Próxima";
          return { ...ed, status: newStatus };
        }
        return ed;
      })
    );
  };

  const addPhotoToEdition = (editionSlug: string, photo: Omit<EditionPhoto, "id">) => {
    const newPhoto: EditionPhoto = {
      ...photo,
      id: `p-${Date.now()}`,
    };
    setEditions((prev) =>
      prev.map((ed) => {
        if (ed.slug === editionSlug) {
          return { ...ed, gallery: [newPhoto, ...ed.gallery] };
        }
        return ed;
      })
    );
  };

  const deletePhotoFromEdition = (editionSlug: string, photoId: string) => {
    setEditions((prev) =>
      prev.map((ed) => {
        if (ed.slug === editionSlug) {
          return { ...ed, gallery: ed.gallery.filter((p) => p.id !== photoId) };
        }
        return ed;
      })
    );
  };

  return (
    <EditionsContext.Provider
      value={{
        editions,
        addEdition,
        updateEdition,
        deleteEdition,
        toggleEditionStatus,
        addPhotoToEdition,
        deletePhotoFromEdition,
      }}
    >
      {children}
    </EditionsContext.Provider>
  );
}

export function useEditions() {
  const context = useContext(EditionsContext);
  if (!context) {
    throw new Error("useEditions must be used within an EditionsProvider");
  }
  return context;
}
