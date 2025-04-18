// chatbot-loader.js - Incluye este archivo en todas las páginas donde quieras el chatbot

document.addEventListener('DOMContentLoaded', function() {
    // Evitar duplicación si ya existe
    if (!document.getElementById('chatbot-container')) {
        // 1. Crear el contenedor principal del chatbot
        const chatbotContainer = document.createElement('div');
        chatbotContainer.id = 'chatbot-container';
        
        // 2. Cargar los estilos del chatbot
        const chatbotStyles = document.createElement('style');
        chatbotStyles.textContent = `
            /* Import Google Fonts */
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600&family=Rubik:wght@400;500;700&display=swap');

            #chatbot-toggler {
                position: fixed;
                bottom: 30px;
                right: 35px;
                border: none;
                height: 50px;
                width: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border-radius: 50%;
                background: #ffffff;
                box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);  /* Sombra mejorada */
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);  /* Transición más suave con efecto bounce */
                z-index: 9999;
                overflow: hidden;  /* Para el efecto de ondas */
            }

            /* Efecto de ondas al hacer clic */
            #chatbot-toggler::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                transform: scale(0);
                opacity: 0;
                transition: all 0.5s ease-out;
            }

            #chatbot-toggler:active::after {
                transform: scale(2);
                opacity: 0;
                transition: 0s;
            }

            body.show-chatbot #chatbot-toggler {
                transform: rotate(90deg);
                background: #f0f0f0;
                box-shadow: 0 3px 10px rgb(215, 202, 202);  /* Sombra ajustada cuando está activo */
            }

            #chatbot-toggler:hover {
                background: #f0f0f0;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);  /* Sombra más pronunciada en hover */
                transform: scale(1.08) translateY(-2px);  /* Efecto de elevación mejorado */
            }

            #chatbot-toggler span {
                position: absolute;
                color: #000000;
                transition: all 0.3s ease;  /* Transición suave para el cambio de iconos */
            }

            body.show-chatbot #chatbot-toggler span:first-child,
            #chatbot-toggler span:last-child {
                opacity: 0;
                transform: scale(0.5);  /* Escala el icono al desaparecer */
            }

            body.show-chatbot #chatbot-toggler span:last-child {
                opacity: 1;
                transform: scale(1);  /* Restaura la escala al aparecer */
            }

            /* Contenedor del chatbot */
            .chatbot-popup {
                width: 420px;
                max-width: 95vw;
                background: #fff;
                overflow: hidden;
                border-radius: 20px;
                position: fixed;
                right: 35px;
                bottom: 90px;
                opacity: 0;
                visibility: hidden;  /* Mejorar accesibilidad ocultando completamente */
                transform: translateY(20px) scale(0.95);  /* Posición inicial para animación */
                transform-origin: bottom right;
                pointer-events: none;
                box-shadow: 0 15px 40px rgba(255, 255, 255, 0.52);  /* Sombra más profunda y realista */
                transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);  /* Transición más suave y natural */
                z-index: 9998;
            }

            /* Ajustes responsivos para dispositivos móviles */
            @media screen and (max-width: 480px) {
                .chatbot-popup {
                    right: 10px;
                    left: 10px;
                    width: calc(100% - 20px);
                    bottom: 80px;
                }
                
                #chatbot-toggler {
                    right: 20px;
                    bottom: 20px;
                }
            }

            body.show-chatbot .chatbot-popup {
                opacity: 1;
                visibility: visible;
                transform: translateY(0) scale(1);  /* Posición final de la animación */
                pointer-events: auto;
            }

            /* Header */
            .chat-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #000000;
                padding: 15px 20px;
                border-radius: 20px 20px 0 0;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.23);  /* Sombra sutil */
                position: relative;
                z-index: 1;  /* Para que la sombra se muestre sobre el cuerpo */
            }

            .chat-header .logo-text {
                color: #fff;
                font-size: 1.3rem;
                font-weight: 600;
                margin: 0;
                text-shadow: 0 1px 2px rgba(198, 198, 198, 0.73);  /* Sombra de texto sutil */
                transition: all 0.3s ease;  /* Transición para hover */
            }

            .chat-header:hover .logo-text {
                transform: translateX(3px);  /* Pequeño movimiento en hover */
            }

            .chat-header button {
                border: none;
                background: transparent;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.2s ease;
                padding: 5px;
                border-radius: 50%;
            }

            .chat-header button:hover {
                background: rgba(255, 255, 255, 0.1);  /* Fondo sutil en hover */
                transform: translateY(-2px);  /* Ligero movimiento hacia arriba */
            }

            .chat-header button:active {
                transform: translateY(0);  /* Regresa a posición original al hacer clic */
            }

            /* Cuerpo del chat */
            .chat-body {
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                height: 400px;
                overflow-y: auto;
                background: #f9f9f9;
                scrollbar-width: thin;
                scrollbar-color: #cccccc transparent;
                scroll-behavior: smooth;  /* Scroll suave */
                transition: background-color 0.3s ease;  /* Transición de fondo */
            }

            @media screen and (max-width: 480px) {
                .chat-body {
                    height: 60vh;
                    max-height: 400px;
                }
            }

            /* Estilo de los mensajes */
            .message {
                display: flex;
                align-items: center;
                gap: 10px;
                max-width: 85%;
                animation: messageAppear 0.3s ease forwards;
                opacity: 0;
                transform: translateY(10px);
                width: 100%; /* Agregar esta línea para asegurar que tome todo el ancho disponible */
            }

            @keyframes messageAppear {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Retraso escalonado para mensajes */
            .message:nth-child(1) { animation-delay: 0.1s; }
            .message:nth-child(2) { animation-delay: 0.15s; }
            .message:nth-child(3) { animation-delay: 0.2s; }
            .message:nth-child(4) { animation-delay: 0.25s; }
            .message:nth-child(5) { animation-delay: 0.3s; }

            .bot-message .message-text {
                background: #e0e0e0;
                padding: 12px 16px;
                border-radius: 15px 15px 15px 5px;
                font-size: 0.95rem;
                color: #333;
                word-wrap: break-word;
                word-break: break-word; /* Agregar esta línea */
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.56);
                transition: all 0.2s ease;
                position: relative;
                overflow: hidden;
            }

            .bot-message .message-text::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 4px;
                background: linear-gradient(to bottom,rgb(145, 145, 145),rgb(10, 10, 10));  /* Borde con degradado */
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .bot-message:hover .message-text::before {
                opacity: 1;
            }

            .bot-message:hover .message-text {
                transform: translateX(2px);  /* Ligero movimiento en hover */
            }

            .user-message {
                align-self: flex-end;
                flex-direction: column;
                align-items: flex-end;
            }

            .user-message .message-text {
                background: #000000;
                color: #fff;
                padding: 12px 16px;
                border-radius: 15px 15px 5px 15px;
                font-size: 0.95rem;
                word-wrap: break-word;
                word-break: break-word; /* Agregar esta línea */
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.56);
                transition: all 0.2s ease;
                position: relative;
                overflow: hidden;
            }

            .user-message .message-text::after {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    to bottom right,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.1) 50%,
                    rgba(255, 255, 255, 0) 100%
                );
                transform: rotate(45deg);
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .user-message:hover .message-text::after {
                opacity: 1;
            }

            .user-message:hover .message-text {
                transform: translateX(-2px);  /* Ligero movimiento en hover */
            }

            /* Footer del chat */
            .chat-footer {
                background: #fff;
                padding: 15px 20px;
                border-top: 1px solid #ddd;
                transition: all 0.3s ease;
                position: relative;
            }

            /* Línea decorativa que aparece al enfocar el input */
            .chat-footer::before {
                content: '';
                position: absolute;
                left: 50%;
                top: 0;
                height: 2px;
                width: 0;
                background: linear-gradient(to right,rgb(0, 0, 0), #333);
                transform: translateX(-50%);
                transition: width 0.3s ease;
            }

            .chat-footer:has(.message-input:focus)::before {
                width: 100%;
            }

            .chat-form {
                display: flex;
                align-items: center;
                background: #f1f1f1;
                border-radius: 30px;
                padding: 5px 15px;
                position: relative;
                transition: all 0.3s ease;
                /* Quitamos la sombra interna */
            }

            .chat-form:focus-within {
                background: #f5f5f5;
                /* Quitamos la sombra al tener foco */
                transform: translateY(-1px); /* Mantenemos el ligero movimiento al enfocar */
            }

            .message-input {
                flex: 1;
                border: none;
                outline: none;
                background: transparent;
                padding: 10px 5px;
                font-size: 1rem;
                font-family: "Rubik", sans-serif;
                resize: none;
                max-height: 80px;
                min-height: 24px;
                overflow-y: hidden;
                line-height: 1.5;
                box-sizing: border-box;
                width: 100%;
                margin-right: 10px;
                transition: height 0.2s ease;  /* Transición más suave */
            }

            .message-input:focus {
                outline: none;
                border: none;
            }

            .chat-controls {
                display: flex;
                align-items: center;
                flex-shrink: 0;
                position: relative;  /* Para efectos visuales */
            }

            .chat-controls button {
                background: #000000;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px;
                border-radius: 50%;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);  /* Transición con rebote */
                flex-shrink: 0;
                width: 35px;
                height: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;  /* Para el efecto de ondas */
            }

            /* Efecto de ondas al hacer clic en el botón */
            .chat-controls button::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                opacity: 0;
                transition: all 0.5s ease-out;
            }

            .chat-controls button:active::after {
                transform: scale(2);
                opacity: 0;
                transition: 0s;
            }

            .chat-controls button:hover {
                background: #333333;
                transform: scale(1.1) rotate(5deg);  /* Rotación sutil al pasar el cursor */
                box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);  /* Sombra al pasar el cursor */
            }

            .chat-controls button:active {
                transform: scale(0.95);  /* Efecto de clic */
            }

            .chat-form .chat-controls #send-message {
                color: #fff;
                display: none;
                background: #000000;
            }

            .chat-form .message-input:valid~.chat-controls #send-message {
                display: flex;
                animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);  /* Animación de aparición */
            }

            @keyframes popIn {
                0% {
                    transform: scale(0);
                    opacity: 0;
                }
                100% {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            /* Botón oculto durante espera de respuesta */
            .waiting-response #send-message {
                display: none !important;
            }

            /* Animación de los puntos de "pensando..." */
            .thinking-indicator {
                display: flex;
                gap: 5px;
                padding: 10px;
                background: #e0e0e0;
                border-radius: 15px 15px 15px 5px;
                min-width: 40px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);  /* Sombra sutil */
            }

            .thinking-indicator .dot {
                height: 7px;
                width: 7px;
                opacity: 0.7;
                border-radius: 50%;
                background: #333333;
                animation: dotPulse 1.5s ease-in-out infinite;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);  /* Sombra sutil */
            }

            .chat-body .bot-message .thinking-indicator .dot:nth-child(1) {
                animation-delay: 0.2s;
            }
            .chat-body .bot-message .thinking-indicator .dot:nth-child(2) {
                animation-delay: 0.3s;
            }
            .chat-body .bot-message .thinking-indicator .dot:nth-child(3) {
                animation-delay: 0.4s;
            }

            @keyframes dotPulse {
                0%, 44% {
                    transform: translateY(0);
                }
                28% {
                    opacity: 0.4;
                    transform: translateY(-6px);  /* Mayor desplazamiento para más dinamismo */
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);  /* Sombra en punto alto */
                }
            }

            /* Scroll mejorado */
            .chat-body::-webkit-scrollbar {
                width: 6px;
            }

            .chat-body::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.02);  /* Fondo sutil para la pista */
                border-radius: 10px;
            }

            .chat-body::-webkit-scrollbar-thumb {
                background: #aaaaaa;
                border-radius: 10px;
                transition: background 0.3s ease;  /* Transición para el hover */
            }

            .chat-body::-webkit-scrollbar-thumb:hover {
                background: #888888;  /* Color más oscuro al pasar el cursor */
            }

            /* Animación para nuevos mensajes */
            @keyframes newMessage {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Animación para el avatar del bot */
            .bot-avatar {
                transition: all 0.3s ease;
                transform-origin: center;
            }

            .bot-message:hover .bot-avatar {
                transform: scale(1.1) rotate(5deg);  /* Efecto al pasar el cursor */
            }
        `;
        document.head.appendChild(chatbotStyles);
        
        // 3. Añadir fuentes de Material Symbols si no existen ya
        if (!document.querySelector('link[href*="Material+Symbols+Rounded"]')) {
            const materialSymbols = document.createElement('link');
            materialSymbols.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded";
            materialSymbols.rel = "stylesheet";
            document.head.appendChild(materialSymbols);
        }

        // 4. Crear el HTML del chatbot
        chatbotContainer.innerHTML = `
            <button id="chatbot-toggler">
                <span class="material-symbols-rounded">mode_comment</span>
                <span class="material-symbols-rounded">close</span>
            </button>

            <div class="chatbot-popup">
                <!-- Chatbot Header -->
                <div class="chat-header">
                    <div class="header-info">
                        <h2 class="logo-text">Asistente Virtual</h2>
                    </div>
                    <button id="close-chatbot">
                        <span class="material-symbols-rounded">
                            keyboard_arrow_down
                            </span>
                    </button>
                </div>

                <!-- Chatbot Body -->
                <div class="chat-body">
                    <!-- Los mensajes se cargarán dinámicamente desde sessionStorage -->
                </div>

                <!-- Chatbot Footer !-->
                <div class="chat-footer">
                    <form action="#" class="chat-form">
                        <textarea placeholder="Escribe un mensaje..." class="message-input" rows="1" required></textarea>
                        <div class="chat-controls">
                            <button type="submit" id="send-message">
                                <span class="material-symbols-rounded">arrow_upward</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
        
        document.body.appendChild(chatbotContainer);
        
        // 5. Agregar los scripts necesarios
        // Emoji picker si no existe
        if (!document.querySelector('script[src*="emoji-mart"]')) {
            const emojiScript = document.createElement('script');
            emojiScript.src = "https://cdn.jsdelivr.net/npm/@emoji-mart/react/dist/emoji-mart.js";
            document.body.appendChild(emojiScript);
        }
        
        // 6. Inicializar la funcionalidad del chatbot
        initChatbotFunctionality();
    }
});

// El resto del código se mantiene igual...
function initChatbotFunctionality() {
    const chatbotToggler = document.getElementById("chatbot-toggler");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatForm = document.querySelector(".chat-form");
    const messageInput = document.querySelector(".message-input");
    const sendMessageButton = document.getElementById("send-message");
    const chatBody = document.querySelector(".chat-body");
    
    // URL de tu API de chatbot
    const URL_API = '/api/chatbot'; // Usamos una ruta relativa para la API
    
    // Clave para almacenar los mensajes en sessionStorage
    const STORAGE_KEY = "chatbot_messages";
    
    // Clave para almacenar ID de sesión (para identificar sesiones abiertas)
    const SESSION_KEY = "chatbot_session_id";
    
    // Variable para controlar si estamos esperando respuesta
    let waitingForResponse = false;
    
    // Inicializar o recuperar ID de sesión
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
        sessionId = generateSessionId();
        sessionStorage.setItem(SESSION_KEY, sessionId);
    }
    
    // Generar ID de sesión único
    function generateSessionId() {
        return "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    }
    
    // Controlar el tamaño del textarea
    function autoResizeTextarea() {
        // Guardar el valor del scrollHeight actual
        const scrollHeight = messageInput.scrollHeight;
        
        // Resetear la altura para obtener un nuevo cálculo correcto
        messageInput.style.height = "auto";
        
        // Calcular nueva altura (con un mínimo de 24px)
        let newHeight = Math.max(24, messageInput.scrollHeight);
        
        // Limitar altura máxima a 80px
        if (newHeight > 80) {
            newHeight = 80;
            messageInput.style.overflowY = "auto";
        } else {
            messageInput.style.overflowY = "hidden";
        }
        
        // Aplicar nueva altura
        messageInput.style.height = newHeight + "px";
    }
    
    // Inicializar altura del textarea
    messageInput.addEventListener('input', autoResizeTextarea);
    messageInput.addEventListener('focus', autoResizeTextarea);
    window.addEventListener('resize', autoResizeTextarea);
    
    // Función para guardar mensajes en sessionStorage
    function saveMessages(messages) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
    
    // Función para cargar mensajes desde sessionStorage
    function loadMessages() {
        const savedMessages = sessionStorage.getItem(STORAGE_KEY);
        return savedMessages ? JSON.parse(savedMessages) : [];
    }
    
    // Función para controlar el estado de espera de respuesta
    function setWaitingState(waiting) {
        waitingForResponse = waiting;
        
        // En lugar de deshabilitar, simplemente aplicamos una clase al formulario
        if (waiting) {
            chatForm.classList.add('waiting-response');
        } else {
            chatForm.classList.remove('waiting-response');
        }
    }
    
    // Función para agregar mensajes al chat y guardarlos
    const addMessage = (message, isBot = false, save = true) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isBot ? "bot-message" : "user-message"}`;
        messageDiv.style.opacity = "0"; // Inicialmente invisible para la animación
        
        if (isBot) {
            // Añadir avatar del bot
            messageDiv.innerHTML = `
                <svg class="bot-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"
                viewBox="0 0 512 512" xml:space="preserve">
                <g>
                    <circle style="fill:#000000;" cx="256" cy="100.174" r="22.261"/>
                    <rect x="456.348" y="233.739" style="fill:#000000;" width="44.522" height="133.565"/>
                    <rect x="11.13" y="233.739" style="fill:#000000;" width="44.522" height="133.565"/>
                </g>
                <polygon style="fill:#f0f0f0;" points="167.699,166.957 100.174,166.957 55.652,166.957 55.652,434.087 456.348,434.087 456.348,166.957 "/>
                <g>
                    <circle style="fill:#000000;" cx="166.957" cy="278.261" r="22.261"/>
                    <circle style="fill:#000000;" cx="345.043" cy="278.261" r="22.261"/>
                </g>
                <path style="fill:#333333;" d="M256,378.435c30.736,0,55.652-24.917,55.652-55.652H200.348C200.348,353.518,225.264,378.435,256,378.435z"/>
                </svg>
            `;
        }
        
        messageDiv.innerHTML += `<div class="message-text">${message}</div>`;
        chatBody.appendChild(messageDiv);
        
        // Animar la aparición del mensaje
        setTimeout(() => {
            messageDiv.style.animation = "newMessage 0.4s ease forwards";
        }, 50);
        
        // Guardar mensaje en sessionStorage si es necesario
        if (save) {
            const messages = loadMessages();
            messages.push({
                message,
                isBot,
                timestamp: new Date().getTime()
            });
            saveMessages(messages);
        }
        
        // Scroll al final del chat con animación suave
        setTimeout(() => {
            chatBody.scrollTo({
                top: chatBody.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
        
        return messageDiv;
    };
    
    // Función para mostrar indicador de "pensando..."
    const showThinking = () => {
        const thinkingDiv = document.createElement("div");
        thinkingDiv.className = "message bot-message";
        thinkingDiv.style.opacity = "0"; // Inicialmente invisible para la animación
        
        thinkingDiv.innerHTML = `
            <svg class="bot-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"
            viewBox="0 0 512 512" xml:space="preserve">
            <g>
                <circle style="fill:#000000;" cx="256" cy="100.174" r="22.261"/>
                <rect x="456.348" y="233.739" style="fill:#000000;" width="44.522" height="133.565"/>
                <rect x="11.13" y="233.739" style="fill:#000000;" width="44.522" height="133.565"/>
            </g>
            <polygon style="fill:#f0f0f0;" points="167.699,166.957 100.174,166.957 55.652,166.957 55.652,434.087 456.348,434.087 456.348,166.957 "/>
            <g>
                <circle style="fill:#000000;" cx="166.957" cy="278.261" r="22.261"/>
                <circle style="fill:#000000;" cx="345.043" cy="278.261" r="22.261"/>
            </g>
            <path style="fill:#333333;" d="M256,378.435c30.736,0,55.652-24.917,55.652-55.652H200.348C200.348,353.518,225.264,378.435,256,378.435z"/>
            </svg>
            <div class="thinking-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        `;
        
        chatBody.appendChild(thinkingDiv);
        
        // Animar la aparición del indicador
        setTimeout(() => {
            thinkingDiv.style.animation = "newMessage 0.4s ease forwards";
        }, 50);
        
        // Scroll al final del chat con animación suave
        setTimeout(() => {
            chatBody.scrollTo({
                top: chatBody.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
        return thinkingDiv;
    };
    
    // Función para manejar mensajes salientes
    const handleOutgoingMessage = (e) => {
        e.preventDefault();
        
        // Si estamos esperando respuesta, no permitir enviar otro mensaje
        if (waitingForResponse) {
            return;
        }
        
        const userMessage = messageInput.value.trim();
        
        // Validar que haya un mensaje para enviar
        if (!userMessage) return;
        
        // Agregar mensaje del usuario al chat
        addMessage(userMessage, false);
        
        // Activar estado de espera (oculta botón pero permite seguir escribiendo)
        setWaitingState(true);
        
        // Limpiar el textarea
        messageInput.value = "";
        
        // Importante: Corregir el tamaño del textarea después de limpiar
        messageInput.style.height = "auto";
        // Aplicar un mínimo de altura para mantener la consistencia visual
        if (messageInput.clientHeight < 24) {
            messageInput.style.height = "24px";
        }
        
        // Mantener el foco en el textarea para permitir seguir escribiendo
        messageInput.focus();
        
        // Mostrar indicador de "pensando..."
        const thinkingIndicator = showThinking();
        
        // Llamar a la API del chatbot
        fetchBotResponse(userMessage, thinkingIndicator);
    };
    
    // Función para obtener respuesta del bot
    const fetchBotResponse = async (userMessage, thinkingIndicator) => {
        try {
            // Agregar un pequeño retraso para mejorar la UX (mínimo 700ms)
            const startTime = Date.now();
            
            // Realizar la petición al servidor
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    pregunta: userMessage,
                    // sessionId: sessionId  // Enviamos el ID de sesión para tracking
                })
            });
            
            // Procesar la respuesta
            const data = await response.json();
            
            // Calcular tiempo transcurrido y agregar retraso adicional si es necesario
            const elapsedTime = Date.now() - startTime;
            const minResponseTime = 700; // Tiempo mínimo en ms para mostrar el indicador
            
            if (elapsedTime < minResponseTime) {
                await new Promise(resolve => setTimeout(resolve, minResponseTime - elapsedTime));
            }
            
            // Eliminar indicador de pensando con animación de desvanecimiento
            thinkingIndicator.style.animation = "fadeOut 0.3s ease forwards";
            await new Promise(resolve => setTimeout(resolve, 300)); // Esperar a que termine la animación
            thinkingIndicator.remove();
            
            // Usar la respuesta de la API o mostrar un mensaje de error
            if (data && data.respuesta) {
                addMessage(data.respuesta, true);
            } else {
                addMessage("Lo siento, no pude procesar tu solicitud correctamente.", true);
            }
            
        } catch (error) {
            console.error("Error al obtener respuesta del bot:", error);
            // Manejar el error con una animación suave
            thinkingIndicator.style.animation = "fadeOut 0.3s ease forwards";
            await new Promise(resolve => setTimeout(resolve, 300));
            thinkingIndicator.remove();
            
            addMessage("Lo siento, ha ocurrido un error al conectar con el servicio. Por favor, intenta de nuevo más tarde.", true);
        } finally {
            // Desactivar estado de espera (muestra botón de nuevo)
            setWaitingState(false);
        }
    };

    // Cargar mensajes previos desde sessionStorage con animación escalonada
    const loadChatHistory = () => {
        const messages = loadMessages();
        
        // Limpiar chat (por si acaso)
        chatBody.innerHTML = '';
        
        // Si no hay mensajes previos, mostrar mensaje de bienvenida
        if (messages.length === 0) {
            // Añadir el mensaje de bienvenida con un ligero retraso para la animación
            setTimeout(() => {
                addMessage("¡Hola! ¿En qué puedo ayudarte hoy? 😊", true, false);
            }, 300);
        } else {
            // Cargar todos los mensajes previos con un retraso escalonado
            messages.forEach((msg, index) => {
                setTimeout(() => {
                    addMessage(msg.message, msg.isBot, false);
                }, 100 * (index + 1)); // Retraso escalonado para cada mensaje
            });
        }
    };
    
    // Agregar la animación de desvanecimiento al CSS
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(fadeOutStyle);
    
    // Validar que el formulario no se envíe si está vacío
    chatForm.addEventListener("submit", (e) => {
        if (!messageInput.value.trim() || waitingForResponse) {
            e.preventDefault();
            // Efecto visual de "sacudida" si intenta enviar vacío
            if (!messageInput.value.trim()) {
                chatForm.classList.add('shake');
                setTimeout(() => chatForm.classList.remove('shake'), 500);
            }
            return false;
        }
        handleOutgoingMessage(e);
    });
    
    // Capturar "Enter" para enviar mensajes
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            if (messageInput.value.trim() && !waitingForResponse) {
                e.preventDefault(); // Prevenir salto de línea
                handleOutgoingMessage(e);
            } else {
                e.preventDefault(); // Prevenir salto de línea vacío
                // Pequeña vibración del formulario si está vacío
                if (!messageInput.value.trim()) {
                    chatForm.classList.add('shake');
                    setTimeout(() => chatForm.classList.remove('shake'), 500);
                }
            }
        }
    });
    
    // Añadir animación de "sacudida" al CSS
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shakeAnim {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-5px); }
            40%, 80% { transform: translateX(5px); }
        }
        .chat-form.shake {
            animation: shakeAnim 0.4s ease;
        }
    `;
    document.head.appendChild(shakeStyle);
    
    // Manejar el botón de enviar mensaje con efecto de pulsación
    sendMessageButton.addEventListener("click", (e) => {
        if (messageInput.value.trim() && !waitingForResponse) {
            // Efecto visual de botón pulsado
            sendMessageButton.classList.add('pulse');
            setTimeout(() => sendMessageButton.classList.remove('pulse'), 300);
            handleOutgoingMessage(e);
        } else {
            e.preventDefault();
            // Efecto visual de "sacudida" si intenta enviar vacío
            if (!messageInput.value.trim()) {
                chatForm.classList.add('shake');
                setTimeout(() => chatForm.classList.remove('shake'), 500);
            }
        }
    });
    
    // Añadir animación de pulsación al CSS
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulseAnim {
            0% { transform: scale(1); }
            50% { transform: scale(0.85); }
            100% { transform: scale(1); }
        }
        .chat-controls button.pulse {
            animation: pulseAnim 0.3s ease;
        }
    `;
    document.head.appendChild(pulseStyle);
    
    // Efecto de apertura del chatbot
    const openChatbotWithEffect = () => {
        document.body.classList.add("show-chatbot");
        
        // Animación de apertura para el botón toggler
        chatbotToggler.style.animation = "togglerRotate 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
        
        // Restablecer la animación después de completarse
        setTimeout(() => {
            chatbotToggler.style.animation = "";
        }, 500);
        
        // Dar foco al input con un pequeño retraso para permitir la transición
        setTimeout(() => {
            messageInput.focus();
            autoResizeTextarea();
        }, 400);
    };
    
    // Efecto de cierre del chatbot
    const closeChatbotWithEffect = () => {
        // Animación de cierre
        document.querySelector('.chatbot-popup').style.animation = "closeAnim 0.4s ease forwards";
        
        // Quitar la clase después de la animación
        setTimeout(() => {
            document.body.classList.remove("show-chatbot");
            document.querySelector('.chatbot-popup').style.animation = "";
        }, 380);
        
        // Animación de rotación inversa para el botón toggler
        chatbotToggler.style.animation = "togglerRotateReverse 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards";
        
        // Restablecer la animación después de completarse
        setTimeout(() => {
            chatbotToggler.style.animation = "";
        }, 500);
    };
    
    // Añadir animaciones para abrir/cerrar
    const toggleAnimStyle = document.createElement('style');
    toggleAnimStyle.textContent = `
        @keyframes togglerRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(90deg); }
        }
        
        @keyframes togglerRotateReverse {
            0% { transform: rotate(90deg); }
            100% { transform: rotate(0deg); }
        }
        
        @keyframes closeAnim {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
    `;
    document.head.appendChild(toggleAnimStyle);
    
    // Botones para mostrar/ocultar chatbot con efectos mejorados
    chatbotToggler.addEventListener("click", () => {
        if (document.body.classList.contains("show-chatbot")) {
            closeChatbotWithEffect();
        } else {
            openChatbotWithEffect();
        }
    });
    
    closeChatbot.addEventListener("click", closeChatbotWithEffect);
    
    // Efecto pulsante sutil para el botón toggler cuando está cerrado
    const pulseTogglerStyle = document.createElement('style');
    pulseTogglerStyle.textContent = `
        @keyframes gentlePulse {
            0%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3); }
            50% { transform: scale(1.05); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3); }
        }
        
        /* Solo aplicar la animación cuando el chat está cerrado */
        body:not(.show-chatbot) #chatbot-toggler {
            animation: gentlePulse 3s ease-in-out infinite;
        }
        
        body.show-chatbot #chatbot-toggler {
            animation: none; /* Detener la animación cuando el chat está abierto */
        }
    `;
    document.head.appendChild(pulseTogglerStyle);
    
    // Cargar historial de chat al iniciar con efecto de aparición gradual
    setTimeout(loadChatHistory, 100);
    
    // Aplicar el autoResize inicial para asegurar que el textarea tenga el tamaño correcto
    setTimeout(autoResizeTextarea, 100);
    
    // Efectos visuales para el foco del textarea
    messageInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    messageInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
    
    // Estilo para el efecto de foco
    const focusEffectStyle = document.createElement('style');
    focusEffectStyle.textContent = `
        .chat-form.focused {
            transform: translateY(-3px);
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(focusEffectStyle);
}