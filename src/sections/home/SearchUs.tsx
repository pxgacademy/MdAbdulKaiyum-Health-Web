"use client";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import Input from "@/components/ui/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const SearchUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <SectionTitle>অনুসন্ধান করুন</SectionTitle>

      <div>
        <img
          src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
          alt=""
        />
      </div>

      {
        //
      }
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="নামঃ"
            placeholder="আপনার নাম"
            {...register("name", { required: "Name is required" })}
            error={errors.name?.message}
          />

          <Input
            label="নাম্বারঃ"
            placeholder="আপনার নাম্বার"
            {...register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />
          <Input
            label="ইমেইলঃ"
            type="email"
            placeholder="আপনার ইমেইল"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            error={errors.email?.message}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default SearchUs;
