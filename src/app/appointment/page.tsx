"use client";

import SectionContainer from "@/components/SectionContainer";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { SubmitHandler, useForm } from "react-hook-form";
interface FormValues {
  dr: string;
  problem: string;
  date: string;
}

const AppointmentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <SectionContainer marginTop="my-20 md:my-40">
      <SectionTitle>বুক অ্যাপয়েন্টমেন্ট</SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mt-8"
      >
        <Select
          label="লাইফস্টাইল মডিফায়ার"
          requiredIndicator
          options={[{ label: "Md. Abdul Kaiyum", value: "Md. Abdul Kaiyum" }]}
          {...register("dr", { required: "নাম বাধ্যতামূলক দিতে হবে" })}
          error={errors.dr?.message}
        />

        <Select
          label="আপনার সমস্যা সিলেক্ট করুন"
          requiredIndicator
          options={[
            { label: "ফ্যাটি প্যানক্রিয়াস", value: "ফ্যাটি প্যানক্রিয়াস" },
            { label: "হাইপারইনসুলিনমিয়া", value: "হাইপারইনসুলিনমিয়া" },
            {
              label: "কোলেস্ট্রল (রক্তে চর্বি)",
              value: "কোলেস্ট্রল (রক্তে চর্বি)",
            },
          ]}
          {...register("problem", { required: "নাম বাধ্যতামূলক দিতে হবে" })}
          error={errors.problem?.message}
        />
        <Input
          label="অ্যাপয়েন্টমেন্ট ডেট সিলেক্ট করুন"
          type="date"
          requiredIndicator
          {...register("date", { required: "নাম বাধ্যতামূলক দিতে হবে" })}
          error={errors.date?.message}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full mt-5">
          {isSubmitting ? "Requesting..." : "Request Appointment Now!"}
        </Button>
      </form>
    </SectionContainer>
  );
};

export default AppointmentPage;
