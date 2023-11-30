'use client'
import { Input } from '../Input'
import { LuPlus } from 'react-icons/lu'

export function Header() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold ">Lista de Compras</h1>

      <form className="flex flex-col items-start gap-3 md:flex-row">
        <Input variant="item" name="quantity" />
        <div className="flex items-end  gap-3 max-md:flex-row">
          <Input variant="quantity" name="quantity" />
          <Input variant="category" name="category" />
          <button type="submit" className=" mb-1 rounded-full bg-purple p-2">
            <LuPlus size={24} />
          </button>
        </div>
      </form>
    </div>
  )
}
