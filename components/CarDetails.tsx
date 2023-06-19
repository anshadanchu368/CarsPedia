"use CLient";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { CarProps } from "@/types";
import React from "react";
import { generateCarImagesUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
        onClose={closeModal}
      >
        <div className="flex items-center justify-center min-h-screen ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-zsl transition-all flex flex-col gap-5">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
              >
                <Image src="/close.svg" alt="image" width={20} height={20} />
              </button>

              <div className="flex-1 flex flex-col gap-3 p-6">
                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <Image
                    src={generateCarImagesUrl(car)}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImagesUrl(car,'29')}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImagesUrl(car,'33')}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                  </div>
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <Image
                    src={generateCarImagesUrl(car,'13')}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                  />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-2 p-6 shadow-xl">
                 <h2 className="font-semibold text-xl capitalize">{car.make}{car.model}</h2>

                 <div className="mt-3 flex flex-wrap gap-4">
                  {Object.entries(car).map(([key,value])=>(
                    <div className="flex justify-between gap-5 w-full text-right" key={key}>
                   <h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
                   <p className="text-black-100font-semibold">{value}</p>
                    </div>

                  ))}
                 </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
