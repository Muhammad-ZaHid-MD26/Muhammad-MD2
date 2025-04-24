FROM quay.io/suhailtechinfo/suhail-v2

# Clone your GitHub repo
RUN git clone https://github.com/Muhammad-ZaHid-MD26/Muhammad-MD2 /root/Muhammad-MD2

# Set working directory
WORKDIR /root/Muhammad-MD2

# Install dependencies
RUN npm install --force

# Expose port for Koyeb
EXPOSE 8000

# Start the bot
CMD ["node", "index.js"]
