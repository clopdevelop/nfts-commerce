import FavProducts from "@/components/products/FavProducts";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: 'Favoritos',
  description: "Los productos guardados en favoritos",
};

export default async function Home() {
  const cookie  = cookies().get('favoritos')?.value ?? "0";
  //Convertir cookie en array de numeros
  const favorites : number[] = cookie.split(",").map(Number);

  return (
    <>
      <div className="container mx-auto">
        <FavProducts favorites={favorites}></FavProducts>
      </div>
    </>
  );
}
