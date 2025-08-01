'use client';

import { useState, useEffect } from "react";
import LoaderSpinner from "@/components/loader-spinner";

interface MenuFormProps {
  initialData?: { id: string; name: string, category: string,  description:string; price: number, image:string };
  onSubmit: (data: { id?: string; name: string, category: string,  description:string; price: number, image:string }) => void;
}

export default function MenuForm({ initialData, onSubmit }: MenuFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPrice(initialData.price);
      setCategory(initialData.category);
      setDescription(initialData.description);
      setImage(initialData.image);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // cegah form reload
    onSubmit({ id: initialData?.id, name, description, price, image, category });
    setLoading(false)
    setName("");
    setPrice(0);
    setCategory("");
    setDescription("");
    setImage("");
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/admin/menu/uploadGambar", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setImage(data.url); // simpan URL Cloudinary ke state
      } else {
        alert("Upload gagal: " + data.error);
      }
    } catch (err) {
      alert("Upload gagal: " + (err as Error).message);
    }
    setLoading(false);
  };



  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
    <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Menu</label>
        <input
        type="text"
        placeholder="Menu name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
        required
      />
    </div>
    <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Harga</label>
        <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
        required
      />
    </div>
    <div>
    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
      Kategori
    </label>
    <select
      id="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
      required
    >
      <option value="">-- Pilih Kategori --</option>
      <option value="pizza">Pizza</option>
      <option value="pasta">Pasta</option>
    </select>
  </div>
    <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
        <textarea
        placeholder="Deskripsi"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-1 block w-full border rounded-lg hover:border-red-700 p-2"
        required
      />
    </div>
    <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">Gambar</label>
        <label className="cursor-pointer inline-block w-full text-center py-1 my-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:border:bg-gray-100">
          Pilih Gambar
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            required={!initialData?.image}
          />
        </label>

        {image && (
          <img
            src={image}
            alt="Preview"
            className="mt-3 h-32 w-full object-cover rounded-md border border-gray-200"
          />
        )}
    </div>
      <button type="submit" className="bg-red-600 hover-red-700 text-white py-1 rounded my-5">
        {loading ? <LoaderSpinner /> : initialData ? "Update Menu" : "Add Menu"}
        {/* {initialData ? "Update Menu" : "Add Menu"} */}
      </button>
    </form>
  );
}
