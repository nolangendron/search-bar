import React from 'react'
import { ResultItem } from './ResultItem'

export const ResultsList = ({ meals }) => {
  return (
    <div>
      {meals.map((item, index) => (
        <ResultItem key={index} name={item.strMeal} />
      ))}
    </div>
  )
}