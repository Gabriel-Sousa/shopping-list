'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type Product = {
  id: string
  name: string
  amount: number
  type: 'unidade' | 'litro' | 'quilograma'
  category: 'fruta' | 'padaria' | 'legume' | 'bebida' | 'carne'
  isChecked: boolean
}

interface ShoppingListContextData {
  shoppingList: Product[]
  addShoppingList: (product: Product) => void
  changeChecked: (id: string) => void
}

interface ShoppingListProviderProp {
  children: ReactNode
}

export const ShoppingListContext = createContext({} as ShoppingListContextData)

export function ShoppingListProvider({ children }: ShoppingListProviderProp) {
  const [shoppingList, setShoppingList] = useState<Product[]>([])

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@shopping-list:products-state-1.0.0',
    )

    if (storedStateAsJSON) {
      setShoppingList(JSON.parse(storedStateAsJSON))
    }
  }, [])

  function addShoppingList(product: Product) {
    const typeAllowed = ['unidade', 'litro', 'quilograma']
    const verificationOfType = !typeAllowed.includes(product.type)

    const categoryAllowed = ['fruta', 'padaria', 'legume', 'bebida', 'carne']
    const verificationOfCategory = !categoryAllowed.includes(product.category)

    if (
      product.name === '' ||
      product.amount === 0 ||
      verificationOfCategory ||
      verificationOfType
    ) {
      return
    }

    const storedStateAsJSON = localStorage.getItem(
      '@shopping-list:products-state-1.0.0',
    )

    if (storedStateAsJSON) {
      const dataAlreadyInLocalStorage = JSON.parse(
        storedStateAsJSON,
      ) as Product[]

      localStorage.setItem(
        '@shopping-list:products-state-1.0.0',
        JSON.stringify([product, ...dataAlreadyInLocalStorage]),
      )

      setShoppingList([...shoppingList, product])

      return
    }

    localStorage.setItem(
      '@shopping-list:products-state-1.0.0',
      JSON.stringify([product]),
    )

    setShoppingList([product])
  }

  function changeChecked(id: string) {
    const changedItem = shoppingList.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked }
      } else {
        return item
      }
    })

    setShoppingList(changedItem)
    localStorage.setItem(
      '@shopping-list:products-state-1.0.0',
      JSON.stringify(changedItem),
    )
  }

  return (
    <ShoppingListContext.Provider
      value={{ shoppingList, addShoppingList, changeChecked }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}

export function useShoppingList(): ShoppingListContextData {
  const context = useContext(ShoppingListContext)

  return context
}
