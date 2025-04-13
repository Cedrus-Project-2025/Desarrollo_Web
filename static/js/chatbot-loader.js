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
                background: #5350c4;
                transition: all 0.2s ease;
                z-index: 9999;
            }

            body.show-chatbot #chatbot-toggler {
                transform: rotate(90deg);
            }

            #chatbot-toggler span{
                position: absolute;
                color: #fff;
            }

            body.show-chatbot #chatbot-toggler span:first-child,
            #chatbot-toggler span:last-child {
                opacity: 0;
            }

            body.show-chatbot #chatbot-toggler span:last-child{
                opacity: 1;
            }

            /* Contenedor del chatbot */
            .chatbot-popup {
                width: 420px;
                background: #fff;
                overflow: hidden;
                border-radius: 20px;
                position: fixed;
                right: 35px;
                bottom: 90px;
                opacity: 0;
                transform-origin: bottom right;
                pointer-events: none;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transition: all 0.3s ease-in-out;
                z-index: 9998;
            }

            body.show-chatbot .chatbot-popup{
                opacity: 1;
                pointer-events: auto;
            }

            /* Header */
            .chat-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #5a48c4;
                padding: 15px 20px;
                border-radius: 20px 20px 0 0;
            }

            .chat-header .logo-text {
                color: #fff;
                font-size: 1.3rem;
                font-weight: 600;
            }

            .chat-header button {
                border: none;
                background: transparent;
                color: #fff;
                font-size: 1.5rem;
                cursor: pointer;
            }

            /* Cuerpo del chat */
            .chat-body {
                padding: 20px;
                display: flex;
                flex-direction: column;
                gap: 15px;
                height: 400px;
                overflow-y: auto;
                background: #f9f9ff;
                scrollbar-width: thin;
                scrollbar-color: #ccccf5 transparent;
            }

            /* Estilo de los mensajes */
            .message {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .bot-message .message-text {
                background: #e0e0ff;
                padding: 12px 16px;
                border-radius: 15px 15px 15px 5px;
                font-size: 0.95rem;
                color: #333;
            }

            .user-message {
                align-self: flex-end;
                flex-direction: column;
                align-items: flex-end;
            }

            .user-message .message-text {
                background: #5a48c4;
                color: #fff;
                padding: 12px 16px;
                border-radius: 15px 15px 5px 15px;
                font-size: 0.95rem;
            }

            /* Footer del chat */
            .chat-footer {
                background: #fff;
                padding: 15px 20px;
                border-top: 1px solid #ddd;
            }

            .chat-form {
                display: flex;
                align-items: center;
                background: #f1f1ff;
                border-radius: 30px;
                padding: 5px 10px;
            }

            .message-input {
                flex: 1;
                border: none;
                outline: none;
                background: transparent;
                padding: 10px;
                font-size: 1rem;
                border-radius: 20px;
                font-family: "Rubik", sans-serif;
                resize: none;
                max-height: 80px;
                min-height: 24px;
                overflow-y: auto;
                line-height: 1.5;
            }

            .chat-controls button {
                background: #5a48c4;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px;
                border-radius: 50%;
                transition: 0.2s ease-in-out;
            }

            .chat-controls button:hover {
                background: #4737a0;
            }

            .chat-form .chat-controls #send-message{
                color: #fff;
                display: none;
                background: #5350c4;
            }

            .chat-form .message-input:valid~.chat-controls #send-message{
                display: block;
            }

            /* Animación de los puntos de "pensando..." */
            .thinking-indicator {
                display: flex;
                gap: 5px;
                padding: 10px;
                background: #e0e0ff;
                border-radius: 15px 15px 15px 5px;
                min-width: 40px;
            }

            .thinking-indicator .dot {
                height: 7px;
                width: 7px;
                opacity: 0.7;
                border-radius: 50%;
                background: #6f6bc2;
                animation: dotPulse 1.5s ease-in-out infinite;
            }

            .chat-body .bot-message .thinking-indicator .dot:nth-child(1){
                animation-delay: 0.2s;
            }
            .chat-body .bot-message .thinking-indicator .dot:nth-child(2){
                animation-delay: 0.3s;
            }
            .chat-body .bot-message .thinking-indicator .dot:nth-child(3){
                animation-delay: 0.4s;
            }

            @keyframes dotPulse {
                0%, 44% {
                    transform: translateY(0);
                }
                28% {
                    opacity: 0.4;
                    transform: translateY(-4px);
                }
            }

            /* Scroll mejorado */
            .chat-body::-webkit-scrollbar {
                width: 6px;
            }

            .chat-body::-webkit-scrollbar-thumb {
                background: #b6a4f5;
                border-radius: 5px;
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

// Función para inicializar la funcionalidad del chatbot
function initChatbotFunctionality() {
    const chatbotToggler = document.getElementById("chatbot-toggler");
    const closeChatbot = document.getElementById("close-chatbot");
    const chatForm = document.querySelector(".chat-form");
    const messageInput = document.querySelector(".message-input");
    const sendMessageButton = document.getElementById("send-message");
    const chatBody = document.querySelector(".chat-body");
    
    // URL de tu API de chatbot
    const API_URL = "https://tu-api-chatbot.com/endpoint"; // Reemplaza con tu URL real
    
    // Clave para almacenar los mensajes en sessionStorage
    const STORAGE_KEY = "chatbot_messages";
    
    // Clave para almacenar ID de sesión (para identificar sesiones abiertas)
    const SESSION_KEY = "chatbot_session_id";
    
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
        messageInput.style.height = "auto";
        let newHeight = messageInput.scrollHeight;
        if (newHeight > 80) {
            newHeight = 80;
        }
        messageInput.style.height = newHeight + "px";
    }
    
    // Inicializar altura del textarea
    messageInput.addEventListener('input', autoResizeTextarea);
    
    // Función para guardar mensajes en sessionStorage
    function saveMessages(messages) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
    
    // Función para cargar mensajes desde sessionStorage
    function loadMessages() {
        const savedMessages = sessionStorage.getItem(STORAGE_KEY);
        return savedMessages ? JSON.parse(savedMessages) : [];
    }
    
    // Función para agregar mensajes al chat y guardarlos
    const addMessage = (message, isBot = false, save = true) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isBot ? "bot-message" : "user-message"}`;
        
        if (isBot) {
            // Añadir avatar del bot
            messageDiv.innerHTML = `
                <svg class="bot-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"
                viewBox="0 0 512 512" xml:space="preserve">
                <g>
                    <circle style="fill:#55C1B4;" cx="256" cy="100.174" r="22.261"/>
                    <rect x="456.348" y="233.739" style="fill:#55C1B4;" width="44.522" height="133.565"/>
                    <rect x="11.13" y="233.739" style="fill:#55C1B4;" width="44.522" height="133.565"/>
                </g>
                <polygon style="fill:#C8EBE3;" points="167.699,166.957 100.174,166.957 55.652,166.957 55.652,434.087 456.348,434.087 456.348,166.957 "/>
                <g>
                    <circle style="fill:#55C1B4;" cx="166.957" cy="278.261" r="22.261"/>
                    <circle style="fill:#55C1B4;" cx="345.043" cy="278.261" r="22.261"/>
                </g>
                <path style="fill:#3B629D;" d="M256,378.435c30.736,0,55.652-24.917,55.652-55.652H200.348C200.348,353.518,225.264,378.435,256,378.435z"/>
                </svg>
            `;
        }
        
        messageDiv.innerHTML += `<div class="message-text">${message}</div>`;
        chatBody.appendChild(messageDiv);
        
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
        
        // Scroll al final del chat
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageDiv;
    };
    
    // Función para mostrar indicador de "pensando..."
    const showThinking = () => {
        const thinkingDiv = document.createElement("div");
        thinkingDiv.className = "message bot-message";
        thinkingDiv.innerHTML = `
            <svg class="bot-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"
            viewBox="0 0 512 512" xml:space="preserve">
            <g>
                <circle style="fill:#55C1B4;" cx="256" cy="100.174" r="22.261"/>
                <rect x="456.348" y="233.739" style="fill:#55C1B4;" width="44.522" height="133.565"/>
                <rect x="11.13" y="233.739" style="fill:#55C1B4;" width="44.522" height="133.565"/>
            </g>
            <polygon style="fill:#C8EBE3;" points="167.699,166.957 100.174,166.957 55.652,166.957 55.652,434.087 456.348,434.087 456.348,166.957 "/>
            <g>
                <circle style="fill:#55C1B4;" cx="166.957" cy="278.261" r="22.261"/>
                <circle style="fill:#55C1B4;" cx="345.043" cy="278.261" r="22.261"/>
            </g>
            <path style="fill:#3B629D;" d="M256,378.435c30.736,0,55.652-24.917,55.652-55.652H200.348C200.348,353.518,225.264,378.435,256,378.435z"/>
            </svg>
            <div class="thinking-indicator"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>
        `;
        chatBody.appendChild(thinkingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return thinkingDiv;
    };
    
    // Función para manejar mensajes salientes
    const handleOutgoingMessage = (e) => {
        e.preventDefault();
        const userMessage = messageInput.value.trim();
        
        // Validar que haya un mensaje para enviar
        if (!userMessage) return;
        
        // Agregar mensaje del usuario al chat
        addMessage(userMessage, false);
        
        // Limpiar y restaurar el textarea
        messageInput.value = "";
        messageInput.style.height = "auto";
        messageInput.style.height = "24px"; // Restaurar altura original
        
        // Mostrar indicador de "pensando..."
        const thinkingIndicator = showThinking();
        
        // Llamar a la API del chatbot
        fetchBotResponse(userMessage, thinkingIndicator);
    };
    
    // Función para obtener respuesta del bot
    const fetchBotResponse = async (userMessage, thinkingIndicator) => {
        try {
            // Aquí debes implementar la llamada a tu API
            // Ejemplo usando fetch:
            /*
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    message: userMessage,
                    sessionId: sessionId  // Enviar ID de sesión para mantener contexto
                })
            });
            const data = await response.json();
            */
            
            // Simulación de respuesta (reemplaza con tu llamada a API real)
            await new Promise(resolve => setTimeout(resolve, 1000));
            const botResponse = "Esta es una respuesta simulada. Debes reemplazar esta parte con la llamada a tu API real.";
            
            // Eliminar indicador de pensando y mostrar respuesta
            thinkingIndicator.remove();
            addMessage(botResponse, true);
            
        } catch (error) {
            console.error("Error al obtener respuesta del bot:", error);
            thinkingIndicator.remove();
            addMessage("Lo siento, ha ocurrido un error. Por favor, intenta de nuevo más tarde.", true);
        }
    };
    
    // Cargar mensajes previos desde sessionStorage
    const loadChatHistory = () => {
        const messages = loadMessages();
        
        // Limpiar chat (por si acaso)
        chatBody.innerHTML = '';
        
        // Si no hay mensajes previos, mostrar mensaje de bienvenida
        if (messages.length === 0) {
            addMessage("¡Hola! ¿En qué puedo ayudarte hoy? 😊", true, false);
        } else {
            // Cargar todos los mensajes previos
            messages.forEach(msg => {
                addMessage(msg.message, msg.isBot, false);
            });
        }
        
        // Scroll al final
        chatBody.scrollTop = chatBody.scrollHeight;
    };
    
    // Validar que el formulario no se envíe si está vacío
    chatForm.addEventListener("submit", (e) => {
        if (!messageInput.value.trim()) {
            e.preventDefault();
            return false;
        }
        handleOutgoingMessage(e);
    });
    
    // Capturar "Enter" para enviar mensajes
    messageInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            if (messageInput.value.trim()) {
                e.preventDefault(); // Prevenir salto de línea
                handleOutgoingMessage(e);
            } else {
                e.preventDefault(); // Prevenir salto de línea vacío
            }
        }
    });
    
    // Manejar el botón de enviar mensaje
    sendMessageButton.addEventListener("click", (e) => {
        if (messageInput.value.trim()) {
            handleOutgoingMessage(e);
        } else {
            e.preventDefault();
        }
    });
    
    // Botones para mostrar/ocultar chatbot
    chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
    closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
    
    // Cargar historial de chat al iniciar
    loadChatHistory();
}