# Usa uma imagem oficial e leve do Node.js
FROM node:20-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia a pasta src para dentro do container
COPY src/ ./src/

# Expõe a porta que oservidor está usando
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "src/index.js"]