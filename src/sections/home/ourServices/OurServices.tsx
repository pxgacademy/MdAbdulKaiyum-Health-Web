"use client";

import SectionContainer from "@/components/SectionContainer";
import { servicesDemoData } from "./demoData";
import ShortenByCharacters from "@/components/StringShortener";
import ServiceDetailsModal from "./ServiceDetailsModal";
import SectionTitle from "./../../../components/SectionTitle";

const OurServices = () => {
  const openModal = (modalId: string) => {
    const modal = document.getElementById(modalId) as HTMLDialogElement | null;
    modal?.showModal();
  };

  return (
    <SectionContainer>
      <SectionTitle>
        আমাদের সেবা সমূহ
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="currentColor"
          className="w-10 h-10 text-blue-500"
        >
          <path d="M440-120v-60h340v-304q0-123.686-87.321-209.843Q605.357-780 480-780t-212.679 86.157Q180-607.686 180-484v244h-20q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v69q0 24.75-17.625 42.375T780-120H440Zm-80.175-290Q347-410 338.5-418.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm240 0Q587-410 578.5-418.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM241-462q-7-106 64-182t177-76q87 0 151 57.5T711-519q-89-1-162.5-50T434.719-698Q419-618 367.5-555.5 316-493 241-462Z"></path>
        </svg>
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {servicesDemoData.map((data, i) => {
          const modalId = `modal-${i}`;
          return (
            <div key={i} className="p-6 rounded-xl shadow">
              <div className="flex flex-col gap-2 justify-center items-center">
                <img
                  src={data.image}
                  alt={data.title}
                  className="size-10 rounded-full"
                />
                <h4 className="text-lg font-bold font-bangla">{data.title}</h4>
              </div>
              <p className="text-base font-bangla mt-3 mb-2">
                <ShortenByCharacters text={data.description} limit={30} />
              </p>
              <button
                className="text-blue-500 cursor-pointer "
                onClick={() => openModal(modalId)}
              >
                বিস্তারিত দেখুন
              </button>

              {/* Modal */}
              <ServiceDetailsModal
                id={modalId}
                title={data.title}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default OurServices;

/* Open the modal using document.getElementById('ID').showModal() method 
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
 */
