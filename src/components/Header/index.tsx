'use client'

import { LuPlus } from 'react-icons/lu'
import { useShoppingList } from '@/hooks/useShoppingList'
import { InputItem } from '../Input/InputItem'
import { InputAmount } from '../Input/InputAmount'
import { InputCategory } from '../Input/InputCategory'
import { FormEvent } from 'react'

export function Header() {
  const { addProductToShoppingList } = useShoppingList()
  function handleForm(e: FormEvent) {
    e.preventDefault()
    addProductToShoppingList()
  }
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-gray-100 ">Lista de Compras</h1>

      <form
        onSubmit={handleForm}
        className="flex flex-col items-start gap-3 md:flex-row"
      >
        <InputItem name={'nome'} />
        <div className="flex items-end  gap-3 max-md:flex-row">
          <InputAmount name={'quantity'} />
          <InputCategory name={'category'} />

          <button
            type="submit"
            className=" mb-1 rounded-full bg-purple p-2 transition-colors hover:bg-purple-dark"
          >
            <LuPlus size={24} />
          </button>
        </div>
      </form>
    </div>
  )
}
