import * as React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";

// # INPUT TEXT 기본 타입
export interface ITextInputProps {}

export function ITextInput(props: ITextInputProps) {
  return (
    <>
      <input type="text" />
    </>
  );
}

// # TEXTAREA 기본 타입
export interface ITextAreaProps {
  rows?: number;
  cols?: number;
}

export function ITextArea(props: ITextAreaProps) {
  return (
    <>
      <textarea rows={props.rows ? props.rows : 5} cols={33}></textarea>
    </>
  );
}

// REACT HOOK FORM 적용
// # TEXTAREA 기본 타입

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export function RHFDefault() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName")} placeholder="Luo" />

      <input type="submit" />
    </form>
  );
}
