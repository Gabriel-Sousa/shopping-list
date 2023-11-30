'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

type product = {
  name: string
  amount: number
  type: 'unidade' | 'litro' | 'quilograma'
  category: string
}

interface ShoppingListContextData {
  ShoppingList: product[]
  onSetShoppingList: (product: product) => void
}

interface ShoppingListProviderProp {
  children: ReactNode
}

export const ShoppingListContext = createContext({} as ShoppingListContextData)

export function ShoppingListProvider({ children }: ShoppingListProviderProp) {
  const [ShoppingList, setShoppingList] = useState<product[]>([])

  function onSetShoppingList(product: product) {
    const typeAllowed = ['unidade', 'litro', 'quilograma']
    const verificationOfType = !typeAllowed.includes(product.type)

    if (
      product.name === '' ||
      product.amount === 0 ||
      product.category === '' ||
      verificationOfType
    ) {
      return
    }
    setShoppingList([...ShoppingList, product])
    console.log(product)
  }

  return (
    <ShoppingListContext.Provider value={{ ShoppingList, onSetShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  )
}

export function useShoppingList(): ShoppingListContextData {
  const context = useContext(ShoppingListContext)

  return context
}
