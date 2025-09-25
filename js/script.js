/**
 * SCRIPT PRINCIPAL DEL PORTAFOLIO DE WENDY CORZO
 * Funcionalidades:
 * - Navegación suave entre secciones
 * - Menú hamburguesa para móviles
 * - Manejo del formulario de contacto
 * - Efectos de scroll y animaciones
 * - Validación de formularios
 */

// ===== CONFIGURACIÓN INICIAL =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portafolio de Wendy Corzo cargado correctamente');
    
    // Inicializar todas las funcionalidades
    initNavigation();
    initContactForm();
    initScrollEffects();
    initMobileMenu();
    initAnimations();
});

// ===== NAVEGACIÓN SUAVE =====
function initNavigation() {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento por defecto
            
            // Obtener el ID de la sección destino
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calcular la posición considerando la altura de la navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                // Scroll suave a la sección
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                closeMobileMenu();
            }
        });
    });
}

// ===== MENÚ MÓVIL (HAMBURGUESA) =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            // Alternar clase 'active' en el menú
            navMenu.classList.toggle('active');
            
            // Animación del botón hamburguesa
            this.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Cerrar menú al hacer click fuera de él
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// ===== FORMULARIO DE CONTACTO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir envío por defecto
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const nombre = formData.get('nombre');
            const email = formData.get('email');
            const mensaje = formData.get('mensaje');
            
            // Validar campos
            if (validateForm(nombre, email, mensaje)) {
                // Simular envío del formulario
                sendForm(nombre, email, mensaje);
            }
        });
        
        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateForm(nombre, email, mensaje) {
    let isValid = true;
    
    // Validar nombre
    if (!nombre || nombre.trim().length < 2) {
        showFieldError('nombre', 'El nombre debe tener al menos 2 caracteres');
        isValid = false;
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('email', 'Por favor ingresa un email válido');
        isValid = false;
    }
    
    // Validar mensaje
    if (!mensaje || mensaje.trim().length < 10) {
        showFieldError('mensaje', 'El mensaje debe tener al menos 10 caracteres');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    switch(fieldName) {
        case 'nombre':
            if (value.length < 2) {
                showFieldError(fieldName, 'El nombre debe tener al menos 2 caracteres');
                return false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(fieldName, 'Por favor ingresa un email válido');
                return false;
            }
            break;
            
        case 'mensaje':
            if (value.length < 10) {
                showFieldError(fieldName, 'El mensaje debe tener al menos 10 caracteres');
                return false;
            }
            break;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    
    // Remover error anterior si existe
    clearFieldError(field);
    
    // Agregar clase de error al campo
    field.classList.add('error');
    
    // Crear elemento de error
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#ff4444';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.style.display = 'block';
    
    // Insertar mensaje de error
    formGroup.appendChild(errorElement);
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorElement = formGroup.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.classList.remove('error');
}

function sendForm(nombre, email, mensaje) {
    // Mostrar mensaje de carga
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    // Simular envío (en un proyecto real, aquí harías una petición AJAX)
    setTimeout(() => {
        // Mensaje de éxito en consola
        console.log('Formulario enviado correctamente');
        console.log('Datos del formulario:', {
            nombre: nombre,
            email: email,
            mensaje: mensaje,
            fecha: new Date().toISOString()
        });
        
        // Mostrar mensaje de éxito al usuario
        showSuccessMessage();
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();
        
        // Restaurar botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
    }, 2000);
}

function showSuccessMessage() {
    // Crear mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #00cc88, #00aa66);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            margin-top: 1rem;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0, 204, 136, 0.3);
            animation: slideInUp 0.5s ease-out;
        ">
            <strong>¡Mensaje enviado con éxito!</strong><br>
            Te responderé pronto. Gracias por contactarme.
        </div>
    `;
    
    // Insertar mensaje después del formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    // Remover mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// ===== EFECTOS DE SCROLL =====
function initScrollEffects() {
    // Cambiar estilo de la navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.experience-card, .project-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== ANIMACIONES Y EFECTOS =====
function initAnimations() {
    // Agregar estilos CSS para animaciones
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .field-error {
            animation: slideInUp 0.3s ease-out;
        }
        
        input.error,
        textarea.error {
            border-color: #ff4444 !important;
            box-shadow: 0 0 0 3px rgba(255, 68, 68, 0.1) !important;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    `;
    document.head.appendChild(style);
}

// ===== FUNCIONES UTILITARIAS =====

/**
 * Función para hacer scroll suave a cualquier elemento
 * @param {string} elementId - ID del elemento destino
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = element.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Función para mostrar notificaciones personalizadas
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo de notificación (success, error, info)
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos de la notificación
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        animation: 'slideInRight 0.5s ease-out',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Colores según el tipo
    const colors = {
        success: 'linear-gradient(135deg, #00cc88, #00aa66)',
        error: 'linear-gradient(135deg, #ff4444, #cc3333)',
        info: 'linear-gradient(135deg, #0066ff, #0052cc)'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', function(e) {
    console.error('Error en el portafolio:', e.error);
    // En un entorno de producción, aquí podrías enviar el error a un servicio de monitoreo
});

// ===== INICIALIZACIÓN FINAL =====
console.log('🎉 Portafolio de Wendy Corzo completamente cargado y listo para usar');
console.log('📧 Formulario de contacto funcional');
console.log('📱 Navegación responsive activa');
console.log('✨ Efectos y animaciones habilitados');
