const BASE_URL = 'https://itx-frontend-test.onrender.com/api/';

export async function fetchAllProducts(setProducts, setIsLoading) {
    const response = await fetch(`${BASE_URL}product`);
    try {
        if (response.ok) {
            const products = await response.json();
            setProducts(products);
            setIsLoading(false);
        }
    } catch (error) {
        console.error("Error on fetching data", error);
    }
}

export async function fetchProduct(idProduct, setProduct, setIsLoading) {
    const response = await fetch(`${BASE_URL}product/${idProduct}`);
    try {
        if (response.ok) {
            const products = await response.json();
            setProduct(products);
            setIsLoading(false);
        }
    } catch (error) {
        console.error("Error on fetching data", error);
    }
}