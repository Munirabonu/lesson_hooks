import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function ItemList({ getItems }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const newItem = getItems(8);
        setItems(newItem)
    }, [getItems])
    return (
        <ul>
            {items.map((i) => (
                <li key={i}>
                    {i}
                </li>
            ))}
        </ul>
    );
}
export default ItemList;