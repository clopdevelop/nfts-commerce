import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import changePass from "@/lib/actionscommands";
import Link from "next/link";

export function ChangePassDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="my-3">Cambiar contraseña</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={changePass}>
          <DialogHeader>
            <DialogTitle>Cambiar Contraseña</DialogTitle>
            <DialogDescription>
              Realiza el cambio en tu contraseña. Haz clic en Guardar cuando
              hayas terminado.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="actual" className="text-right">
                Contraseña actual
              </Label>
              <Input
                id="actual"
                name="actual-pass"
                type="password"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new_pass" className="text-right">
                Nueva Contraseña
              </Label>
              <Input
                id="new_pass"
                name="new-pass"
                type="password"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new_pass" className="text-right">
                Confirmar Contraseña
              </Label>
              <Input
                id="new_pass-repeat"
                name="new-pass-repeat"
                type="password"
                className="col-span-3"
              />
            </div>
            <div className="text-right text-sm">
              <Link href="/entrada" className="underline">
                {/* ¿Has olvidado la contraseña? */}
              </Link>
            </div>
          </div>
          <DialogFooter>
            <Button className="!bg-destructive" type="submit">
              Aceptar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}