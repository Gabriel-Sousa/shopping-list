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
    console.log(product)
    // setShoppingList()
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
