import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoaders = async() => {
    const loadededProducts = await fetch('products.json')
    const products = await loadededProducts.json();
    
    const storedCart = getShoppingCart()
    const savedCart = [];

    for(const id in storedCart){
        const addedProducts = products.find(pd => pd.id === id);
        if(addedProducts){
        const quantity = storedCart[id]
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts)
        }
    }
    return savedCart;
}

export default CartProductsLoaders;