"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { userSchema } from "@/lib/schemas";
import { Button } from "@/components/shadcn/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { addUser2, signInGoogle } from "@/lib/actionscommands";
import Link from "next/link";
import { Separator } from "../shadcn/separator";
import { AtSign } from "lucide-react";
export const UserRegisterFormSchema = userSchema
  .pick({
    first_name: true,
    email: true,
    password: true,
    confirmPassword: true,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserRegisterFormSchema>>({
    resolver: zodResolver(UserRegisterFormSchema),
    defaultValues: {
      first_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserRegisterFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
   console.log(values)
    
    addUser2(values); // Uncomment to send formData
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-sm rounded-xl border shadow">
        <header className="flex flex-col space-y-1.5 p-6">
          <h1 className="text-2xl font-semibold leading-none tracking-tight p-5 text-center">
            Registro
          </h1>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-6 p-6 pt-0"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <>
                  <FormItem className="grid gap-2">
                    <FormLabel>Nombre de Usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Usuario" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Usuario@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <>
                  <FormItem className="grid gap-2">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <>
                  <FormItem className="grid gap-2">
                    <FormLabel>Repite la Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <Button className="w-full" type="submit">
              Crear una cuenta
            </Button>
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta? {"     "}
              <Link href="/entrada" className="underline">
                Entrar
              </Link>
            </div>
          </form>
        </Form>
        <div className="flex justify-center text-center text-sm">
        o también puedes
        </div>
        <form
          action={signInGoogle}
          className="text-center pb-2"
        >
          <Button type="submit" className="mt-3 mb-3">
            <AtSign className="mr-2"></AtSign>
            Continuar con Google</Button>
        </form>
      </div>
    
    </div>
  );
}
