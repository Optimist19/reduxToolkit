import { formatCurrency } from "../../utils/helpers";
//eslint-disable-next-line
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  //eslint-disable-next-line
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <p>{isLoadingIngredients ? "Loading..." : ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;
