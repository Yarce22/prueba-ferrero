# ☕ Artesanos - Tienda de Café Premium

**Artesanos** es una aplicación web moderna de comercio electrónico diseñada para la venta de café de especialidad. Ofrece una experiencia de usuario fluida y elegante, permitiendo a los clientes explorar variedades de café, filtrar por origen y tipo, y gestionar su carrito de compras de manera intuitiva.

## ✨ Características Principales

- **Catálogo de Productos**: Visualización atractiva de productos con tarjetas detalladas.
- **Filtrado Avanzado**: Sistema de filtros por **Tipo de Café** (Bourbon, Caturra, Geisha, etc.), **Origen** y **Nivel de Tostado**.
- **Búsqueda en Tiempo Real**: Barra de búsqueda para encontrar productos por nombre instantáneamente.
- **Carrito de Compras**:
  - Agregar y eliminar productos.
  - Ajustar cantidades.
  - Cálculo automático de Subtotal, IVA y Total.
  - Persistencia de datos en `localStorage` (el carrito no se pierde al recargar).
- **Diseño Responsivo**: Interfaz adaptada a dispositivos móviles y escritorio.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack moderno para asegurar rendimiento, mantenibilidad y escalabilidad:

- **[React 19](https://react.dev/)**: Biblioteca principal para construir la interfaz de usuario basada en componentes.
- **[TypeScript](https://www.typescriptlang.org/)**: Añade tipado estático a JavaScript, mejorando la seguridad del código y la experiencia de desarrollo (autocompletado, detección de errores).
- **[Vite](https://vitejs.dev/)**: Entorno de desarrollo de próxima generación, mucho más rápido que CRA.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: Gestor de estado global. Se eligió por su simplicidad, ligereza y falta de "boilerplate" en comparación con Redux.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework de CSS "utility-first" para un diseño rápido, consistente y responsivo.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de iconos populares para la UI.
- **[JSON Server](https://github.com/typicode/json-server)**: Simula una API REST completa para el desarrollo frontend sin necesidad de un backend real.

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu máquina local:

### 1. Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 2. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd prueba-ferrero-machine
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

Necesitarás dos terminales corriendo simultáneamente:

**Terminal 1: Servidor de Base de Datos (Mock)**

```bash
npm run server
```

Esto iniciará `json-server` en el puerto `3001` para servir los productos.

**Terminal 2: Aplicación Frontend**

```bash
npm run dev
```

Esto iniciará la aplicación React con Vite.

### 5. Abrir en el navegador

Visita la URL que aparece en la terminal (usualmente `http://localhost:5173`).

## 📂 Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables (Header, ProductCard, Filter, etc.)
├── store/           # Estados globales con Zustand (filters, shoppingCart, products)
├── types/           # Definiciones de tipos TypeScript (Product, ProductList)
├── App.tsx          # Componente principal y orquestador
└── main.tsx         # Punto de entrada de la aplicación
```

---

Desarrollado por [Alejandro Mira/Yarce22]
