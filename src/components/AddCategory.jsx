import { useState } from "react"

export const AddCategory = ( {setCategories} ) => {

  const [value, setValue] = useState('')

  const onInputChange = ({ target }) => {
    setValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if ( value.trim().length <= 1) return;

    setCategories( categories => [ value, ...categories ])
    setValue('')
  }

  return (
      <>
        <form
          onSubmit={ onSubmit }
        >
          <input 
            type="text"
            placeholder="Buscar gif"
            value={ value }
            onChange={ onInputChange }
          />
        </form>
      </>
    )
}
