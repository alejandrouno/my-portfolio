"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 max-w-4xl flex justify-between items-center">
        <h1 className="text-xl font-bold">JD</h1>
        <nav className="flex gap-4">
          <Button variant="ghost">Inicio</Button>
          <Button variant="ghost">Proyectos</Button>
          <Button variant="ghost">Contacto</Button>
        </nav>
      </div>
    </header>
  )
} 