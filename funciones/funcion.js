// --- Catálogo de productos por sección ---
const catalogo = {
  abarrotes: [
    {
      img: 'img/SALSA BARBACOA CAPORALE GALON.jpg',
      alt: 'Salsa Barbacoa Don Caporale Galón',
      nombre: 'Salsa Barbacoa Don Caporale',
      descripcion: 'Salsa barbacoa ahumada, perfecta para costillas, pollo y carnes a la parrilla.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 120.00'
    },
    {
      img: 'img/SALSA DE TOMATE CAPORALE GALON.jpg',
      alt: 'Salsa de Tomate Don Caporale Galón',
      nombre: 'Salsa de Tomate Don Caporale',
      descripcion: 'Salsa de tomate natural, ideal para pastas, guisos y pizzas.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 95.00'
    },
    {
      img: 'img/ADEREZO CAPORALE 1-2.jpg',
      alt: 'Aderezo Don Caporale 1/2 Galon',
      nombre: 'Aderezo Don Caporale 1/2 Galón',
      descripcion: 'Aderezo cremoso, ideal para ensaladas, sándwiches y acompañamientos.',
      formato: '1/2 galón (1.89 L)',
      precio: 'L. 70.00'
    },
    {
      img: 'img/caja-de-salsa-de-ajo-perejil-buen-provecho-1-2-galon.jpg',
      alt: 'Sal de ajo Perejil Buen Provecho Galon 1/2',
      nombre: 'Sal de ajo Perejil Buen Provecho Galón 1/2',
      descripcion: 'Salsa con ajo y perejil, ideal para carnes, pescados y vegetales.',
      formato: '1/2 galón (1.89 L)',
      precio: 'L. 110.00'
    },
    {
      img: 'img/SALSA DE TOMATE CAPORALE GALON.jpg',
      alt: 'Salsa de Tomate Don Caporale Galón',
      nombre: 'Salsa de Tomate Don Caporale',
      descripcion: 'Salsa de tomate natural, ideal para pastas, guisos y pizzas.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 95.00'
    },
    {
      img: 'img/salsa negra.PNG',
      alt: 'Salsa Negra',
      nombre: 'Salsa Negra',
      descripcion: 'Salsa negra tipo inglesa, ideal para marinar carnes y dar sabor intenso.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 105.00'
    },
    {
      img: 'img/VINAGRE DON CAPORALE 1-2 G.jpg',
      alt: 'Vinagre Don Caporale Galón',
      nombre: 'Vinagre Don Caporale',
      descripcion: 'Vinagre blanco tradicional, ideal para ensaladas, aderezos y conservas.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 80.00'
    },
    {
      img: 'img/salsa-bbq-agridulce-buen-provecho-de-1-2-galon.jpg',
      alt: 'BBQ Agridulce Buen Provecho',
      nombre: 'BBQ Agridulce Buen Provecho',
      descripcion: 'Salsa BBQ agridulce, perfecta para costillas, pollo y carnes asadas.',
      formato: '1/2 galón (1.89 L)',
      precio: 'L. 90.00'
    },
    {
      img: 'img/SALSA BARBACOA CAPORALE GALON.jpg',
      alt: 'Salsa BBQ',
      nombre: 'Salsa BBQ',
      descripcion: 'Salsa barbacoa clásica, ideal para carnes, hamburguesas y parrilladas.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 120.00'
    }
  ],
  vinagres: [
    {
      img: 'img/VINAGRE DON CAPORALE 1-2 G.jpg',
      alt: 'Vinagre Don Caporale Galón',
      nombre: 'Vinagre Don Caporale',
      descripcion: 'Vinagre tradicional, versátil para ensaladas y encurtidos.',
      formato: 'Galón (aprox. 3.78 Litros)',
      precio: 'L. 80.00'
    },
    {
      img: 'images/aderezo_la_chorchita.jpg',
      alt: 'Aderezo La Chorchita',
      nombre: 'Aderezo La Chorchita',
      descripcion: 'Aderezo cremoso, el secreto está en el sabor.',
      formato: 'Botella de 1 Litro (aproximado)',
      precio: 'L. 70.00'
    },
    {
      img: 'img/caja-de-salsa-de-ajo-perejil-buen-provecho-1-2-galon.jpg',
      alt: 'Salsa Ajo Perejil Buen Provecho',
      nombre: 'Salsa de Ajo y Perejil Buen Provecho',
      descripcion: 'Salsa con sabor intenso a ajo y perejil, ideal para carnes y vegetales.',
      formato: 'Galón (aprox. 3.78 Litros)',
      precio: 'L. 110.00'
    },
    {
      img: 'img/vinagre la chorchita.PNG',
      alt: 'Vinagre la chorchita',
      nombre: 'Vinagre la chorchita',
      descripcion: 'Vinagre blanco tradicional, perfecto para ensaladas, aderezos, conservas y limpieza.',
      formato: 'Botella de 1 galón (3.78 L)',
      precio: 'L. 75.00'
    }
  ],
  vasos: [
    {
      img: 'img/BASO.png',
      alt: 'Vaso Cervecero Plástico',
      nombre: 'Vaso Cervecero Plástico',
      descripcion: 'Vasos transparentes con diseño de palmera, ideales para bebidas frías.',
      formato: 'Paquete de 50 unidades',
      precio: 'L. 65.00'
    },
    {
      img: 'img/formnumero9.jpeg',
      alt: 'Plato Super Fom No. 9',
      nombre: 'Plato Desechable Super Fom No. 9',
      descripcion: 'Platos de espuma ideales para servir alimentos en eventos.',
      formato: 'Paquete de 25 unidades',
      precio: 'L. 50.00'
    },
    {
      img: 'img/VASO FOAM 16 OZ POLY CUPS.jpg',
      alt: 'Vasos Fom Cups 16oz',
      nombre: 'Vasos Fom Cups 16oz',
      descripcion: 'Vasos de espuma de 16 onzas, perfectos para bebidas calientes y frías.',
      formato: 'Paquete de 20 unidades',
      precio: 'L. 45.00'
    },
    {
      img: 'img/formnumero9.jpeg',
      alt: 'Platos Super Fom 1P',
      nombre: 'Platos Super Fom 1P',
      descripcion: 'Platos de espuma resistentes, ideales para comidas calientes.',
      formato: 'Paquete de 20 unidades',
      precio: 'L. 45.00'
    },
    {
      img: 'img/formnumero9.jpeg',
      alt: 'Plato Desechable',
      nombre: 'Plato Desechable',
      descripcion: 'Platos desechables multiusos, prácticos para eventos.',
      formato: 'Paquete de 20 unidades',
      precio: 'L. 45.00'
    },
    {
      img: 'img/papel higienico elite.PNG',
      alt: 'Papel Higienico Nube Blanco',
      nombre: 'Papel Higienico Nube Blanco',
      descripcion: 'Papel higiénico suave y resistente, ideal para el hogar.',
      formato: 'Paquete de 20 unidades',
      precio: 'L. 45.00'
    }
  ],
  encendedores: [
    {
      img: 'img/encendedores.JPG',
      alt: 'Encendedores BIC Colores Surtidos',
      nombre: 'Encendedores BIC Colores Surtidos',
      descripcion: 'Encendedores BIC originales, confiables y duraderos.',
      formato: 'Paquete de 5 unidades',
      precio: 'L. 75.00'
    }
  ],
  limpieza: [
    {
      img: 'img/festival 12oz.PNG',
      alt: 'Suavitel Un Sueño',
      nombre: 'Suavitel Un Sueño',
      descripcion: 'Suavizante de telas con fragancia duradera, deja la ropa suave y fresca.',
      formato: 'Botella de 850 ml',
      precio: 'L. 65.00'
    },
    {
      img: 'img/festival 12oz.PNG',
      alt: 'Doble Concentración Francian',
      nombre: 'Doble Concentración Francian',
      descripcion: 'Suavizante concentrado, rinde el doble y deja la ropa con aroma intenso.',
      formato: 'Botella de 800 ml',
      precio: 'L. 70.00'
    },
    {
      img: 'img/festival 12oz.PNG',
      alt: 'Aroma con Extractos Naturales',
      nombre: 'Aroma con Extractos Naturales',
      descripcion: 'Suavizante con extractos naturales, cuida las fibras y perfuma delicadamente.',
      formato: 'Botella de 850 ml',
      precio: 'L. 68.00'
    },
    {
      img: 'img/festival 12oz.PNG',
      alt: 'Pinol Aromas Lavanda',
      nombre: 'Pinol Aromas Lavanda',
      descripcion: 'Limpiador multiusos con aroma a lavanda, elimina suciedad y deja un ambiente fresco.',
      formato: 'Botella de 1 L',
      precio: 'L. 55.00'
    },
    {
      img: 'img/festival 12oz.PNG',
      alt: 'Pinol Original',
      nombre: 'Pinol Original',
      descripcion: 'Limpiador desinfectante, elimina el 99.9% de bacterias y deja aroma fresco.',
      formato: 'Botella de 1 L',
      precio: 'L. 55.00'
    }
  ],
  condimentos: [
    {
      img: 'img/SALSA BARBACOA CAPORALE GALON.jpg',
      alt: 'Salsa BBQ Clásica',
      nombre: 'Salsa BBQ Clásica',
      descripcion: 'Salsa barbacoa de sabor ahumado, ideal para carnes y hamburguesas.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 120.00'
    },
    {
      img: 'img/ADEREZO CAPORALE 1-2.jpg',
      alt: 'Mayonesa Clásica',
      nombre: 'Mayonesa Clásica',
      descripcion: 'Mayonesa cremosa, perfecta para sándwiches, ensaladas y dips.',
      formato: '1/2 galón (1.89 L)',
      precio: 'L. 85.00'
    },
    {
      img: 'img/salsa negra.PNG',
      alt: 'Mostaza Premium',
      nombre: 'Mostaza Premium',
      descripcion: 'Mostaza de sabor intenso, ideal para hot dogs, hamburguesas y aderezos.',
      formato: 'Botella de 1 L',
      precio: 'L. 60.00'
    },
    {
      img: 'img/SALSA DE TOMATE CAPORALE GALON.jpg',
      alt: 'Ketchup Tradicional',
      nombre: 'Ketchup Tradicional',
      descripcion: 'Ketchup de tomate natural, perfecto para acompañar papas, hamburguesas y más.',
      formato: 'Galón (3.78 L)',
      precio: 'L. 95.00'
    }
  ],
  higiene: [
    {
      img: 'img/papel higienico elite.PNG',
      alt: 'Toalla Sanitaria Saba',
      nombre: 'Toalla Sanitaria Saba',
      descripcion: 'Toallas sanitarias ultra absorbentes, máxima protección y comodidad.',
      formato: 'Paquete de 10 unidades',
      precio: 'L. 38.00'
    },
    {
      img: 'img/prestobarba.JPG',
      alt: 'Isopo para el oído',
      nombre: 'Isopo para el oído',
      descripcion: 'Isopos de algodón para higiene personal, suaves y seguros.',
      formato: 'Paquete de 100 unidades',
      precio: 'L. 25.00'
    },
    {
      img: 'img/',
      alt: 'Sedal en Crema 300ml',
      nombre: 'Sedal en Crema',
      descripcion: 'Crema para peinar Sedal, suaviza y protege el cabello. Ideal para uso diario.',
      formato: '300 ml',
      precio: 'L. 65.00'
    },
    {
      img: 'img/',
      alt: 'Sedal Shampoo 600ml',
      nombre: 'Sedal Shampoo',
      descripcion: 'Shampoo Sedal, limpieza profunda y brillo para todo tipo de cabello.',
      formato: '600 ml',
      precio: 'L. 75.00'
    },
    {
      img: 'img/',
      alt: 'Ego para el Cabello (Hombre)',
      nombre: 'Ego para el Cabello',
      descripcion: 'Gel Ego para el cabello, fijación fuerte y duradera. Especial para hombres.',
      formato: '250 ml',
      precio: 'L. 60.00'
    },
    {
      img: 'img/',
      alt: 'Dove para Hombre',
      nombre: 'Dove para Hombre',
      descripcion: 'Shampoo Dove Men+Care, fortalece y protege el cabello masculino.',
      formato: '400 ml',
      precio: 'L. 60.00'
    },
    {
      img: 'img/',
      alt: 'Axe para Hombre',
      nombre: 'Axe para Hombre',
      descripcion: 'Shampoo o gel Axe, aroma intenso y frescura para hombres.',
      formato: '400 ml',
      precio: 'L. 60.00'
    }
  ],
  sofrito: [
    {
      img: 'img/',
      alt: 'Sofrito Natural 90g',
      nombre: 'Sofrito Natural',
      descripcion: 'Mezcla de vegetales y especias lista para cocinar, realza el sabor de tus comidas.',
      formato: '90g',
      precio: 'L. 145.00'
    }
  ]
};

function renderProductos(seccion, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid || !catalogo[seccion]) return;
  grid.innerHTML = catalogo[seccion].map(prod => `
    <div class="product-card">
      <img src="${prod.img}" alt="${prod.alt}">
      <h3>${prod.nombre}</h3>
      <p class="description">${prod.descripcion}</p>
      <p class="format">Formato: ${prod.formato}</p>
      <p class="price">${prod.precio}</p>
      <button class="whatsapp-btn" data-product="${prod.nombre}">Consultar vía WhatsApp</button>
    </div>
  `).join('');
}

// Renderizar todas las secciones
renderProductos('abarrotes', 'abarrotes-grid');
renderProductos('vinagres', 'vinagres-grid');
renderProductos('vasos', 'vasos-grid');
renderProductos('encendedores', 'encendedores-grid');
renderProductos('limpieza', 'limpieza-grid');
renderProductos('condimentos', 'condimentos-grid');
renderProductos('higiene', 'higiene-grid');
renderProductos('sofrito', 'sofrito-grid');

// Delegar eventos de WhatsApp (para productos generados dinámicamente)
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('whatsapp-btn')) {
    const productName = e.target.dataset.product;
    const phoneNumber = '+50488415142';
    const message = encodeURIComponent(`Hola, estoy interesado en comprar: ${productName}. ¿Podrías darme más detalles o ayudarme con mi pedido?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }
});
