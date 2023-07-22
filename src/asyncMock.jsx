const products = [
    {
        id: "1",
        title: "PolarTech Pro",
        price: 120000,
        cover: "campera1.jpg",
        stock: 15,
        category: "camperas",
        description: "Conquista el frío extremo con la campera PolarTech Pro, diseñada para mantener el calor incluso en las condiciones más desafiantes. Confeccionada con materiales de alta tecnología que ofrecen una excelente protección contra el viento y la humedad, esta campera es ideal para aventuras al aire libre y actividades invernales. Su interior forrado con suave polar brinda una comodidad inigualable, mientras que su estilo moderno y versátil la convierte en un imprescindible para aquellos que buscan rendimiento y moda en una sola prenda."
    },
    {
        id: "2",
        title: "UrbanTech Explorer",
        price: 89500,
        cover: "campera2.jpg",
        stock: 24,
        category: "camperas",
        description: "La campera UrbanTech Explorer combina a la perfección el estilo urbano con la funcionalidad técnica. Diseñada para adaptarse al ajetreo de la ciudad, esta prenda resistente al agua y cortavientos te mantendrá seco y abrigado en todo momento. Cuenta con múltiples bolsillos inteligentemente ubicados para guardar tus dispositivos electrónicos, billetera y otros objetos esenciales. Su diseño elegante y contemporáneo la hace perfecta para el día a día en la ciudad y también para escapadas de fin de semana al aire libre."
    },
    {
        id: "3",
        title: "EcoVenture All-Season",
        price: 112500,
        cover: "campera3.jpg",
        stock: 5,
        category: "camperas",
        description: "Descubre la campera EcoVenture All-Season, una opción sostenible para los amantes de la naturaleza. Confeccionada con materiales reciclados y respetuosos con el medio ambiente, esta prenda combina un diseño moderno y una funcionalidad excepcional. Su capa exterior repelente al agua y su forro transpirable te mantendrán cómodo y seco en todas las estaciones. Además, sus detalles reflectantes garantizan visibilidad en condiciones de poca luz, lo que la convierte en la opción perfecta para tus actividades al aire libre y exploraciones respetuosas con el medio ambiente."
    },
    {
        id: "4",
        title: "AdventureTech Youth",
        price: 110000,
        cover: "campera4.jpg",
        stock: 10,
        category: "camperas",
        description: "Para los jóvenes aventureros, la campera AdventureTech Youth es la compañera perfecta. Diseñada pensando en la comodidad y protección de los más jóvenes, esta prenda ofrece un ajuste ergonómico y libertad de movimiento para disfrutar plenamente de sus actividades al aire libre. Su tejido resistente y duradero asegura una larga vida útil, mientras que su capucha ajustable y bolsillos prácticos brindan funcionalidad adicional. Ya sea para excursiones escolares o días de diversión en familia, esta campera garantiza que los jóvenes exploradores estén preparados para enfrentar cualquier desafío con estilo y confianza."
    },
    {
        id: "5",
        title: "NatureVibes",
        price: 8400,
        cover: "remera1.jpg",
        stock: 23,
        category: "remeras",
        description: "Sumérgete en la esencia de la naturaleza con la remera NatureVibes. Su diseño artístico y colorido representa la diversidad y belleza del mundo natural, desde majestuosos bosques hasta impresionantes paisajes montañosos. Confeccionada con algodón orgánico de alta calidad, esta remera es suave al tacto y respetuosa con el medio ambiente. Ya sea para tus aventuras al aire libre o para llevar un toque de naturaleza a la vida urbana, la remera NatureVibes es una declaración de amor hacia nuestro entorno."
    },
    {
        id: "6",
        title: "VintageWaves",
        price: 20130,
        cover: "remera2.jpg",
        stock: 15,
        category: "remeras",
        description: "Transporta tu estilo a la época dorada con la remera VintageWaves. Inspirada en la moda retro de los años 70 y 80, esta prenda te hará revivir la nostalgia de tiempos pasados con su diseño retro y estampados clásicos. Fabricada con algodón peinado de alta calidad, proporciona una sensación de comodidad y durabilidad. Combina esta remera con unos jeans o una falda para lograr un look auténtico y con un toque de encanto vintage que destacará en cualquier ocasión."
    },
    {
        id: "7",
        title: "UrbanXplorer",
        price: 9650,
        cover: "remera3.jpg",
        stock: 39,
        category: "remeras",
        description: "La remera UrbanXplorer es una fusión perfecta entre estilo urbano y espíritu aventurero. Su diseño moderno y minimalista la convierte en una opción versátil para el uso diario, mientras que sus detalles inspirados en la exploración evocan la pasión por descubrir nuevos horizontes. Fabricada con tejidos transpirables y de secado rápido, esta remera te mantendrá fresco y cómodo durante tus actividades urbanas y al aire libre. Llévala sola o combínala con una chaqueta para crear un look audaz y listo para enfrentar cualquier desafío urbano o de exploración."
    },
    
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod)=>prod.id===productId))
        }, 500)
    })
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=>prod.category===categoryId))
        }, 500)
    })
};
