# 🏢 Sistema Comercial — Plataforma de Gestión Comercial

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Backend-yellow?style=for-the-badge&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

> Aplicación web Full Stack para la gestión comercial de pequeños y medianos negocios. Cuenta con un catálogo público y un panel administrativo protegido mediante autenticación y roles de usuario.

🔗 **[🚀 Probar Demo](https://sistema-comercial-cab54.web.app/catalogo)** | 🎥 **[Video Demostrativo](https://www.youtube.com/watch?v=NElaI9GQcUw)**

---

## 🔐 Acceso de Demostración

Para probar las funcionalidades del panel administrativo, utiliza la siguiente cuenta de demostración:

- **Rol:** Administrador
- **Correo:** `admin@gmail.com`
- **Contraseña:** `password2026` 

> ⚠️ **Nota:** Esta cuenta es exclusivamente para demostración y utiliza datos de prueba. No contiene información personal, comercial ni credenciales reales.

---

## ✨ ¿Qué puedes probar?

Con la cuenta de administrador puedes explorar todas las capacidades del sistema:

- 📊 **Dashboard:** Métricas detalladas y gráficos interactivos de la actividad comercial.
- 📦 **Gestión de Productos:** CRUD completo (Crear, Leer, Actualizar, Eliminar) de productos.
- 🗂️ **Gestión de Categorías:** Organización eficiente del catálogo.
- 🛒 **Gestión de Pedidos:** Administración y seguimiento del ciclo de vida de los pedidos.
- 🔐 **Seguridad:** Autenticación y autorización basada en roles (Rutas protegidas).
- 📱 **Diseño UI/UX:** Interfaz 100% responsive (Mobile First) con animaciones fluidas.
- ✅ **Validaciones:** Formularios robustos con validación de datos en tiempo real.

---

## 🛠️ Tecnologías Utilizadas

El proyecto está construido con un stack moderno enfocado en rendimiento y experiencia de desarrollador:

### Frontend
- **Core:** React 19, Vite
- **Estilos:** Tailwind CSS 4, Framer Motion
- **Enrutamiento:** React Router
- **Formularios:** React Hook Form, Zod (Validación de esquemas)
- **Visualización de Datos:** Recharts

### Backend & Infraestructura (BaaS)
- **Firebase Authentication:** Gestión de usuarios y sesiones.
- **Firebase Firestore:** Base de datos NoSQL en tiempo real.
- **Firebase Hosting:** Despliegue rápido y seguro de la aplicación.

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura modular escalable, facilitando el mantenimiento y la incorporación de nuevas funcionalidades:

```text
src/
├── components/   # Componentes UI reutilizables (Botones, Modales, Tarjetas)
├── context/      # Estados globales y proveedores (Auth, Tema)
├── hooks/        # Custom Hooks para lógica de negocio
├── layouts/      # Estructuras de página (Público, Administrativo)
├── pages/        # Vistas principales de la aplicación
├── routes/       # Configuración de enrutamiento y protección de rutas
├── schemas/      # Esquemas de validación con Zod
├── services/     # Integración con Firebase y lógica de datos
└── ...
```

---

## 🚀 Despliegue

La aplicación se encuentra desplegada y accesible públicamente mediante Firebase Hosting:
👉 **[sistema-comercial-cab54.web.app/catalogo](https://sistema-comercial-cab54.web.app/catalogo)**

---

## 📌 Objetivo del Proyecto

Este proyecto fue concebido y desarrollado como una aplicación práctica orientada a implementar y consolidar conocimientos avanzados en:
- Desarrollo Full Stack y arquitectura frontend.
- Implementación de sistemas de autenticación y autorización basada en roles.
- Gestión de estados complejos y persistencia de datos.
- Diseño de interfaces modernas y despliegue de aplicaciones web en la nube.

---

## 👨‍💻 Autor

**Nelson Sosa**  
*Estudiante de 4.º año de Licenciatura en Informática y Desarrollador Full Stack MERN.*

[![LinkedIn](https://www.linkedin.com/in/nelson-sosa-b9b901398/)

