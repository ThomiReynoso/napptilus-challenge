import { setToLocalstorage } from "../utils/cache";

const BASE_URL = 'https://itx-frontend-test.onrender.com/api/';

export async function fetchAllProducts(setProducts, setIsLoading) {
    try {
        const response = await fetch(`${BASE_URL}product`);
        if (response.ok) {
            const products = await response.json();
            setProducts(products);
            setIsLoading(false);
            // Store all products in local storage for 1 hour (its like a cache)
            setToLocalstorage("products", products, 3600000);
        }
    } catch (error) {
        console.error("Error on fetching data", error);
    }
}

export async function fetchProduct(idProduct, setProduct, setIsLoading) {
    try {
        const response = await fetch(`${BASE_URL}product/${idProduct}`);
        if (response.ok) {
            const product = await response.json();
            setProduct(product);
            setToLocalstorage(`product-${idProduct}`, product, 3600000);
            setIsLoading(false);
        }
    } catch (error) {
        console.error("Error on fetching data", error);
    }
}

export async function addProductToCart(id, colorCode, storageCode) {
    try {
        const body = {
            id,
            colorCode, 
            storageCode
        };
        const response = await fetch(`${BASE_URL}cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    
        if (response.ok) {
            const { count } = await response.json();
            return count
        }
    } catch (error) {
        console.error('Error on making POST', error);
    }
}