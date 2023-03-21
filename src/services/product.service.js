const BASE_URL = 'https://itx-frontend-test.onrender.com/api/';

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}product`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error on fetching data', error);
  }
}

export async function fetchProduct(idProduct) {
  try {
    const response = await fetch(`${BASE_URL}product/${idProduct}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error on fetching data', error);
  }
}

export async function addProductToCart(id, colorCode, storageCode) {
  try {
    const body = {
      id,
      colorCode,
      storageCode,
    };
    const response = await fetch(`${BASE_URL}cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const { count } = await response.json();
      return count;
    }
  } catch (error) {
    console.error('Error on making POST', error);
  }
}
