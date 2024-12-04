export const novedadesMock = [
    { 
        id: 1, 
        titulo: "Prueba el nuevo plato: Sushi Tropical", 
        img: "https://i.blogs.es/a17c5d/como-hacer-sushi-maki-recetas-mexico/1366_2000.jpg", 
        descripcion: "Una fusión de sushi tradicional con toques tropicales. Disponible en Sushi del Mar.", 
    },
    { 
        id: 2, 
        titulo: "¡Nuevo Local de Hamburguesas Artesanales!", 
        img: "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png", 
        descripcion: "Descubre el sabor único de nuestras hamburguesas artesanales en Burguer Kingstown.", 
    },
    { 
        id: 3, 
        titulo: "Local Mejor Valorado del Mes", 
        img: "https://www.cote.co.uk/_next/image?url=%2FrestaurantsHeader.webp&w=3840&q=75", 
        descripcion: "El restaurante Sabores de Casa ha sido elegido el mejor del mes con un promedio de 4.9 estrellas.", 
    },
    { 
        id: 4, 
        titulo: "¡2x1 en Pizzas Todo el Día!", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBpkYSbP6514W-o23cQMOgTjIeaq1a4-8Eg&s", 
        descripcion: "Aprovecha el 2x1 en pizzas este viernes en 'Pizza World'.", 
    },
    { 
        id: 5, 
        titulo: "Se Inaugura 'Café París'", 
        img: "https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85)/https://assets.iprofesional.com/assets/jpeg/2023/09/559737.jpeg", 
        descripcion: "Disfruta de un ambiente acogedor y postres europeos en nuestro nuevo local.", 
    },
    { 
        id: 6, 
        titulo: "Festival Gastronómico de Sabores del Mundo", 
        img: "https://www.diarioemprende.cl/files/67449adc34863_1200x719.jpg", 
        descripcion: "Únete al festival y prueba comidas de diferentes países. Entrada gratuita.", 
    },
    { 
        id: 7, 
        titulo: "Cena Romántica para 2 Personas a $25.000", 
        img: "https://animalgourmet.com/wp-content/uploads/2024/02/menu-para-una-cena-romantica-2-jpg.webp", 
        descripcion: "Cena especial con menú de 4 tiempos en 'Rincón Italiano'.", 
    },
    { 
        id: 8, 
        titulo: "La Mejor Pizzería del Año", 
        img: "https://static.wixstatic.com/media/a50387_1cce6b2b61f94ed7b18f7d6b7f0854df~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_85,usm_0.66_1.00_0.01/a50387_1cce6b2b61f94ed7b18f7d6b7f0854df~mv2.jpg", 
        descripcion: "'Pizzería Napoli' ha sido votada como la mejor del año con 5 estrellas.", 
    },
    { 
        id: 9, 
        titulo: "Abrió 'Wok Station': Comida Asiática Exprés", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1B50GGtykPs0ZqlK4eicWCItq0v11UX6jA&s", 
        descripcion: "Comida asiática fresca y rápida con ingredientes de calidad.", 
    },
    { 
        id: 10, 
        titulo: "Clase Gratuita de Cocina Mediterránea", 
        img: "https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2020/08/clases-cocina-precios.jpg", 
        descripcion: "Aprende a cocinar platos mediterráneos en esta clase interactiva. Inscripciones abiertas.", 
    }
];

export function obtenerNovedades() {
    return novedadesMock;
}