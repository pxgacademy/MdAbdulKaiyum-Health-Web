"use client";
import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
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
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <SectionContainer>
      <SectionTitle>অনুসন্ধান করুন</SectionTitle>

      <div className=" me:flex items-center mt-4">
        <div className="flex-1">
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
            alt=""
          />
        </div>

        {/* form */}
        <div className="flex-1 p-4 shadow">
          <p className="text-center text-lg">ম্যাসেজ পাঠান</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="নামঃ"
              placeholder="আপনার নাম"
              requiredIndicator
              {...register("name", { required: "নাম বাধ্যতামূলক দিতে হবে" })}
              error={errors.name?.message}
            />

            <div className="flex flex-col sm:flex-row gap-3 my-2">
              <Input
                label="নাম্বারঃ"
                placeholder="আপনার নাম্বার"
                requiredIndicator
                {...register("phone", {
                  required: "নাম্বার বাধ্যতামূলক দিতে হবে",
                })}
                error={errors.phone?.message}
              />
              <Input
                label="ইমেইলঃ"
                type="email"
                placeholder="আপনার ইমেইল"
                {...register("email", {
                  required: false,
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "সঠিক ইমেইল দিন",
                  },
                })}
                error={errors.email?.message}
              />
            </div>

            <Textarea
              label="ম্যাসেজ"
              placeholder="আপনার ম্যাসেজ টাইপ করুন..."
              requiredIndicator
              {...register("message", {
                required: "ম্যাসেজ বাধ্যতামূলক দিতে হবে",
              })}
              error={errors.message?.message}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5"
            >
              {isSubmitting ? "ম্যাসেজ যাচ্ছে..." : "ম্যাসেজ পাঠান"}
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default SearchUs;
