'use client'

import { Input } from '../Input'
import { LuPlus } from 'react-icons/lu'
import { useShoppingList } from '@/hooks/useShoppingList'

export function Header() {
  const { onSetShoppingList } = useShoppingList()
  function handleForm(e: any) {
    e.preventDefault()
    const target = e.target
    const product = {
      name: target.name.value,
      amount: target.quantity.value,
      type: target.type.value,
      category: target.category.value,
    }

    onSetShoppingList(product)
  }
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold ">Lista de Compras</h1>

      <form
        onSubmit={handleForm}
        className="flex flex-col items-start gap-3 md:flex-row"
      >
        <Input variant="item" name="nome" />
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
