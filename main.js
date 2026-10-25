const products = [
  { name: 'Golden Croissant',        price: '£2.50' },
  { name: 'Blueberry Morning Muffin', price: '£1.80' },
  { name: 'Sourdough Loaf',           price: '£4.20' },
];

document.querySelector('#app').innerHTML = `
  <header>
    <h1>🌅 Sunrise Bakery</h1>
  </header>

  <main>
    <p class="tagline">
      Handcrafted with care since the early hours — every loaf, every crumb,
      baked fresh just for you.
    </p>

    <section class="menu">
      <h2>Today's Picks</h2>
      <ul>
        ${products
          .map(
            (p) => `<li><span class="product-name">${p.name}</span>
                        <span class="product-price">${p.price}</span></li>`
          )
          .join('')}
      </ul>
    </section>
  </main>

  <footer>
    <p>© ${new Date().getFullYear()} Sunrise Bakery · Open every day from 6 am</p>
  </footer>
`;
