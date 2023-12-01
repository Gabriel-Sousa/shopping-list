'use client'

interface InputProps {
  variant: 'item' | 'quantity' | 'category'
  name: string
}

export function Input({ variant, name }: InputProps) {
  if (variant === 'item') {
    return (
      <div className="flex w-3/4 flex-col gap-2 max-md:w-full ">
        <label htmlFor={name} className="text-xs text-gray-200 ">
          Item
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
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
            type="text"
            name={name}
            id={name}
            autoComplete="off"
            placeholder={'1'}
            className="w-1/2 rounded-bl-md rounded-tl-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
          />
          <select
            name={'type'}
            defaultValue={'unidade'}
            className="w-1/2 rounded-br-md rounded-tr-md border border-gray-300 bg-gray-500 p-3 text-gray-200 focus:outline focus:outline-purple-light"
          >
            <option value="unidade">UN.</option>
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
          name={name}
          id={name}
          defaultValue={'padaria'}
          className="rounded-md border border-gray-300 bg-gray-500 p-3 text-gray-100 focus:outline focus:outline-purple-light"
        >
          <option value="padaria">Padaria</option>
          <option value="legume">Legume</option>
          <option value="carne">Carne</option>
          <option value="fruta">Fruta</option>
          <option value="bebida">Bebida</option>
        </select>
      </div>
    )
  }
}
