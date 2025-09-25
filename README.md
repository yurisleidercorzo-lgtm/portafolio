# 🌟 Portafolio Web - Wendy Corzo

## 📋 Descripción

Portafolio web profesional y moderno para **Wendy Marleibis Corzo Osuna**, Ingeniero de Sistemas. Una página web elegante, responsive y funcional que muestra experiencia profesional, proyectos destacados y facilita el contacto.

## ✨ Características

- **🎨 Diseño Moderno**: Paleta de colores atractiva con gradientes y efectos visuales
- **📱 Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **⚡ Navegación Suave**: Scroll suave entre secciones
- **📧 Formulario de Contacto**: Validación en tiempo real y feedback visual
- **🎭 Animaciones**: Efectos hover, transiciones y animaciones de entrada
- **♿ Accesible**: Cumple estándares de accesibilidad web
- **🚀 Optimizado**: Carga rápida y código limpio

## 🗂️ Estructura del Proyecto

```
wendy-corzo-portfolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── img/                # Carpeta para imágenes
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. **Abrir el Portafolio**
- Simplemente abre el archivo `index.html` en tu navegador web
- O utiliza un servidor local para mejor rendimiento

### 2. **Servidor Local (Recomendado)**
Si tienes Python instalado:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Luego visita: `http://localhost:8000`

### 3. **Con Node.js**
Si tienes Node.js:
```bash
npx http-server
```

## 🎨 Personalización

### **Cambiar Colores**
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-color: #0066ff;    /* Color principal */
    --secondary-color: #ff6600;  /* Color secundario */
    --accent-color: #00cc88;     /* Color de acento */
}
```

### **Modificar Información Personal**
1. **Nombre y Título**: Líneas 15-16 en `index.html`
2. **Descripción**: Líneas 18-23 en `index.html`
3. **Experiencia**: Sección `#experiencia` en `index.html`
4. **Proyectos**: Sección `#proyectos` en `index.html`
5. **Datos de Contacto**: Sección `#contacto` en `index.html`

### **Agregar Tu Foto**
1. Coloca tu foto en la carpeta `img/`
2. Cambia la URL en la línea 35 del `index.html`:
```html
<img src="img/tu-foto.jpg" alt="Tu Nombre - Foto de perfil profesional">
```

### **Personalizar Proyectos**
Modifica las tarjetas de proyectos en la sección `#proyectos`:
- Cambia títulos, descripciones e imágenes
- Actualiza las tecnologías utilizadas
- Modifica los enlaces (actualmente son placeholders)

## 📱 Funcionalidades

### **Navegación**
- Menú fijo en la parte superior
- Navegación suave entre secciones
- Menú hamburguesa para dispositivos móviles
- Efectos hover en enlaces

### **Formulario de Contacto**
- Validación en tiempo real
- Campos: Nombre, Email, Mensaje
- Feedback visual de errores
- Mensaje de confirmación
- Console log con datos del formulario

### **Efectos Visuales**
- Animaciones de entrada al hacer scroll
- Efectos hover en botones y tarjetas
- Gradientes y sombras modernas
- Transiciones suaves

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables, flexbox y grid
- **JavaScript Vanilla**: Funcionalidad interactiva
- **Google Fonts**: Tipografía Poppins
- **Unsplash**: Imágenes de ejemplo

## 📐 Responsive Design

El portafolio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Secciones Incluidas

1. **🏠 Presentación/Hero**
   - Nombre y título profesional
   - Descripción personal
   - Foto de perfil
   - Botones de acción

2. **💼 Experiencia**
   - Experiencia laboral destacada
   - Habilidades y competencias
   - Diseño de tarjeta elegante

3. **🚀 Proyectos**
   - Grid de proyectos con imágenes
   - Descripciones y tecnologías
   - Efectos hover interactivos

4. **📧 Contacto**
   - Formulario funcional
   - Información de contacto
   - Enlaces a redes sociales

5. **📄 Footer**
   - Copyright y información legal

## 🔧 Configuración Avanzada

### **Integrar con Backend**
Para hacer funcional el formulario de contacto, modifica la función `sendForm()` en `js/script.js`:

```javascript
function sendForm(nombre, email, mensaje) {
    // Reemplazar con petición AJAX real
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, mensaje })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formulario enviado correctamente');
        showSuccessMessage();
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error al enviar el mensaje', 'error');
    });
}
```

### **SEO Optimization**
Agregar meta tags en el `<head>` del HTML:
```html
<meta name="description" content="Portafolio de Wendy Corzo - Ingeniero de Sistemas">
<meta name="keywords" content="ingeniero, sistemas, portafolio, desarrollo">
<meta property="og:title" content="Wendy Corzo - Portafolio">
<meta property="og:description" content="Ingeniero de Sistemas con 9 años de experiencia">
```

## 🌐 Despliegue

### **GitHub Pages**
1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repositorio`

### **Netlify**
1. Arrastra la carpeta del proyecto a netlify.com
2. O conecta tu repositorio de GitHub
3. Despliegue automático en cada commit

### **Vercel**
1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

## 🐛 Solución de Problemas

### **Imágenes no cargan**
- Verifica las rutas de las imágenes
- Asegúrate de que las imágenes estén en la carpeta `img/`
- Usa rutas relativas: `img/nombre-imagen.jpg`

### **Estilos no se aplican**
- Verifica que `styles.css` esté en la carpeta `css/`
- Comprueba la ruta en el HTML: `<link rel="stylesheet" href="css/styles.css">`

### **JavaScript no funciona**
- Abre las herramientas de desarrollador (F12)
- Revisa la consola para errores
- Verifica que `script.js` esté en la carpeta `js/`

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- Revisa este README
- Consulta los comentarios en el código
- Verifica la consola del navegador para errores

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**¡Disfruta tu nuevo portafolio web! 🎉**

*Creado con ❤️ para Wendy Corzo - Ingeniero de Sistemas*
