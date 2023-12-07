// import React from 'react'
import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuality, increaseItemQuality } from "./cartSlice"

//eslint-disable-next-line
function UpdateItemQuantity({pizzaId, currentQuantity}) {
	const dispatch = useDispatch()
  return (
	<div className="flex items-center gap-2 md:gap3">
		<Button type="round" onClick={()=>dispatch(decreaseItemQuality)}>-</Button>
		<span className="text-sm font-medium">{currentQuantity}</span>
		<Button type="round" onClick={()=>dispatch(increaseItemQuality)}>+</Button>
	</div>
  )
}

export default UpdateItemQuantity