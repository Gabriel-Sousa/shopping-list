'use client'
import { useForm } from 'react-hook-form'

interface InputProps {
  variant: 'item' | 'quantity' | 'category'
  name: string
}

export function Input({ variant, name }: InputProps) {
  const { register } = useForm()
  if (variant === 'item') {
    return (
      <div className="flex w-3/4 flex-col gap-2 max-md:w-full ">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Item
        </label>
        <input
          type="text"
          {...register(name)}
          id={name}
          className="rounded-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
        />
      </div>
    )
  } else if (variant === 'quantity') {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Quantidade
        </label>
        <div className="flex">
          <input
            type="number"
            {...register(name)}
            id={name}
            placeholder={'1'}
            className="w-1/2 rounded-bl-md rounded-tl-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
          />
          <select
            {...register('type')}
            className="w-1/2 rounded-br-md rounded-tr-md border border-gray-300 bg-gray-500 p-3 text-gray-200 focus:outline focus:outline-purple-light"
          >
            <option value="unidade" selected>
              UN.
            </option>
            <option value="litro">L</option>
            <option value="quilogramas">kg</option>
          </select>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Categoria
        </label>
        <select
          {...register(name)}
          id={name}
          className="rounded-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
        >
          <option value="" className="text-gray-200">
            Selecione
          </option>
          <option value="Padaria">Padaria</option>
          <option value="Legume">Legume</option>
          <option value="Carne">Carne</option>
          <option value="Fruta">Fruta</option>
          <option value="Bebida">Bebida</option>
        </select>
      </div>
    )
  }
}
