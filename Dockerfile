FROM quay.io/Muhammad-ZaHid-MD26/Muhammad-MD2

# Project clone
RUN git clone https://github.com/Muhammad-ZaHid-MD26/Muhammad-MD2 /root/Muhammad-MD2

# Work directory set
WORKDIR /root/Muhammad-MD2

# Install dependencies
RUN npm install --force

# Expose for Koyeb
EXPOSE 8000

# Start the bot
CMD ["node", "index.js"]
