# Usa una imagen base con Node.js preinstalado
FROM node:18-bullseye

# Configura el entorno
ENV DEBIAN_FRONTEND=noninteractive

# Actualiza e instala los paquetes necesarios
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg \
    apt-transport-https \
    ca-certificates \
    software-properties-common \
    wget \
    unzip \
    libnss3 \
    libatk-bridge2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libasound2 \
    libpangocairo-1.0-0 \
    libatspi2.0-0 \
    libgtk-3-0 \
    openjdk-17-jdk \
    libgbm1 \
    libopus0 \
    libharfbuzz0b \
    libsecret-1-0 \
    libhyphen0 \
    libmanette-0.2-0 \
    libflite1 \
    libx11-xcb1 \
    libgl1 \
    libgbm-dev \
    libxcomposite-dev \
    libxdamage-dev \
    libxrandr-dev \
    libwoff1 \
    libharfbuzz-icu0 \
    libenchant-2-2 \
    libegl1 \
    libgles2 \
    gstreamer1.0-libav \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install --legacy-peer-deps

# Instala Playwright y las dependencias necesarias
RUN npm install -D @playwright/test allure-playwright

# Instala Allure Commandline
RUN curl -sSL https://github.com/allure-framework/allure2/releases/download/2.19.0/allure-2.19.0.zip -o allure.zip && \
    unzip allure.zip -d /opt && \
    ln -s /opt/allure-2.19.0/bin/allure /usr/local/bin/allure

# Instala los navegadores necesarios para Playwright
RUN npx playwright install

# Copia el resto de los archivos del proyecto
COPY . .

# Comando por defecto para ejecutar los tests
CMD ["npx", "playwright", "test"]
