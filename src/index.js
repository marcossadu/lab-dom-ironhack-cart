// ITERATION 1

function updateSubtotal(product) {
  

    const price = product.querySelector('.price span').textContent;
    const quantity= product.querySelector(".quantity input").value;
    

    console.log(price , quantity);

   
  //... your code goes here
}

function calculateAll() {
  const price = document.querySelector('.price span').textContent;
  const quantity= document.querySelector(".quantity input").value;

  const igual= price * quantity

  return(igual)
  // code in the following two lines is added just for testing purposes.
  
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
