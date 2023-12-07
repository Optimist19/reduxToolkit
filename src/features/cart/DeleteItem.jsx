import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"



function DeleteItem({pizza}) {
	const dispatch = useDispatch()
  return (
	<Button type="small" onClick={()=>dispatch(deleteItem(pizza))}>Delete</Button>
  )
}

export default DeleteItem