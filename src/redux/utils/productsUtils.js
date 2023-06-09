//funcion para agregar un producto al carrito
export const addAProduct = (cart, product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
        return cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    return [...cart, { ...product, quantity: 1 }];
};

//funcion para eliminar un producto del carrito segun su id
export const removeAProduct = (cart, product) => {
    const productExists = cart.find((item) => item.id === product.id);
    if (productExists.quantity === 1) {
        return cart.filter((item) => item.id !== product.id);
    }
    return cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
};

//funcion para obtener el total de los productos en el carrito
export const getTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

//funcion para obtener la cantidad total de productos en el carrito
export const getTotalItems = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
};

//funcion para obtener productos recomendados randoms
export const getRecommendedProducts = (products) => {
    return products
        .map((product) => ({ ...product, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .slice(0, 4);
};