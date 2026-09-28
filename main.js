const extractNumbers = (str) => {
 return str.match(/\d/g)?.map(Number) || [];
  };
 console.log(extractNumbers("a1fg5hj6"));
 const printFibonacci = (current = 0, next = 1) => {
  console.log(current);
 if (current === 144) return;
  setTimeout(() => {
    printFibonacci(next, current + next);
  }, 1000);
};
printFibonacci();
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    products.forEach(product => console.log(product.title));
  }catch (error) {
    console.error(error);
  }
};
fetchProducts();
//почему то сейчас в этом сайте пишет что источник не доступен но сам код вроде сделал правильно
const container = document.getElementById('buttons-container');
container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    document.body.style.backgroundColor = event.target.textContent;
  }
});
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});
menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-item')) {
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
});
const counterElement = document.getElementById('counter');
let count = 0;

const intervalId = setInterval(() => {
  count++;
  counterElement.textContent = count;

  if (count === 100) {
    clearInterval(intervalId);
  }
}, 1);
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    if (!response.ok) return;

    const products = await response.json();
    const availableProducts = products.filter(product => product.inStock);

    renderProducts(availableProducts);
  } catch (error) {
    console.error(error);
  }
}

function renderProducts(products) {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Цена: ${product.price} сомов.</p>
      <hr>
    `;
    container.appendChild(card);
  });
}
loadProducts();
let products = [];
document.getElementById('btn').addEventListener('click', async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    products = await res.json();
    render(products);
  } catch (error) {
    console.error(error);
  }
});
document.getElementById('search').addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.title.toLowerCase().includes(value));
  render(filtered);
});
function render(items) {
  const container = document.getElementById('list');
  container.innerHTML = '';

  items.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>ццена: $${p.price}</p>
      <p>рейтинг: ${p.rating.rate}</p>
      <hr>
 `;
    container.appendChild(div);
  });
}
// тут опять также https://fakestoreapi.com/products сейчса не работает даже если перейти по нему 