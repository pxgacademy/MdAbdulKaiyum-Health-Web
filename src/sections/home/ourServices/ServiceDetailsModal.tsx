"use client";

import Button from "@/components/Button";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  title: string;
  description: string;
}

const ServiceDetailsModal = ({ id, title, description }: Props) => {
  const closeModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    modal?.close();
  };
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box w-full max-w-5xl md:min-w-2xl lg:min-w-4xl p-0">
        <div className="flex justify-between px-6 py-3 border-b border-gray-400 mb-3">
          <p className="text-2xl font-semibold">Appointment Details</p>
          <button className="cursor-pointer" onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="px-6 font-bangla">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="pt-2">{description}</p>
        </div>

        <div className="flex gap-x-2 px-6 py-3 border-t border-gray-400 mt-3">
          <Link href="#">
            <Button>Book Appointment Now</Button>
          </Link>
          <button className="btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ServiceDetailsModal;
