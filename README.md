# 🪙 Bitcoin Live Price Tracker

A simple and clean project that shows the **real-time Bitcoin price** using **Server-Sent Events (SSE)**.  
The price updates automatically every few seconds, and users can simulate buying BTC through an interactive dialog box.

---

## 🚀 Features

- 🔄 Real-time Bitcoin price updates  
- 📡 Backend streaming using SSE  
- 🌐 Live crypto price fetched from external API  
- 🖥️ Frontend updates without refreshing the page  
- 💬 Investment dialog using the `<dialog>` element  
- ⚡ Smooth and lightweight setup

---

## ▶️ How It Works

1. The server creates an SSE connection at `/price`.  
2. Every few seconds, it fetches the latest BTC price from the crypto API.  
3. The server pushes the updated price to the browser through SSE.  
4. The frontend listens for `onmessage` events and updates the UI live.  
5. When the user clicks *Invest Now*, a modal dialog opens with a summary.

---

## 🛠️ Technologies Used

- **Node.js**
- **Server-Sent Events (SSE)**
- **HTML / CSS / JavaScript**
- **Crypto Price API (FreeCryptoAPI)**


