import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Naruto"])

  const addCategory = ( newCategory ) => {
    
    if (categories.includes(newCategory) ) {
      throw new Error("Ya existe esta categoria");
    };
    setCategories([ newCategory, ...categories ])
  }

  return (

    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={ (value) => addCategory(value) }
      />
      { 
        categories.map( category =>
        (
          <GifGrid key={ category } category={ category } />
        )) 
      }
    </>
  )
}
