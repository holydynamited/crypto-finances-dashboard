# 📊 Crypto Portfolio Tracker

A modern, high-performance cryptocurrency portfolio dashboard ironically called Banans built with **React**, **TypeScript**, and **TanStack Query**.

It allows users to track real-time crypto prices, manage a personal portfolio, and visualize performance metrics in a clean and responsive interface.

<img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/d5d7e898-8041-4efd-8497-a3a9c4ff0388" />

<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/56150bbc-e3ab-401c-8e16-54e183326ef4" />

<img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/a50f3dac-59f1-4173-af14-d438c1f86f24" />




🔗 **Live Demo:** https://crypto-tracker-three-khaki.vercel.app/

---

## 🚀 Key Features

- 📈 **Real-time Market Data**  
 Live cryptocurrency prices, 24h changes, and market statistics powered by the **CoinGecko API**.

- 💼 **Portfolio Management (CRUD)**  
  Add, edit, and delete assets with automatic recalculation of balances and portfolio value.

- 📊 **Portfolio Insights (WIP)**  
  Includes visual components such as pie distribution and performance tracking charts *(in development / partially implemented)*.

- ⚡ **Optimized Data Fetching**  
  Built with TanStack Query for caching, background updates, and efficient API usage without UI lag.

- 🔍 **Instant Search**  
  Fast client-side search for available crypto assets.

- 💾 **Persistent State**  
  Portfolio is saved in `localStorage` and restored automatically on reload.

- 🎨 **Modern Responsive UI**  
  Clean dark-themed interface built with Tailwind CSS and Lucide Icons.

---

## 🧠 Project Status

⚠️ This project is currently in **MVP / active development stage**.

Core functionality is implemented, but the project is still evolving.

Current focus:
- stable portfolio logic
- clean data flow
- reusable UI structure

---

## 🔮 Planned Features

- 📱 Full mobile-first responsive design  
- 📊 Advanced analytics (PnL charts, performance tracking over time)  
- 🔔 Price alerts & notifications  
- 🧠 Advanced filtering and sorting system  
- 💱 Multi-currency support  
- 🎨 UI/UX polish with animations  
- 🧩 Backend integration (optional user accounts & cloud sync)

---

## 🛠 Tech Stack & Tools

- React 18 (Hooks, Functional Components)
- TypeScript (strict mode)
- TanStack Query v5
- Tailwind CSS
- Vite
- Lucide React

---

## 📁 Project Structure

```text
crypto-currency-tracker/
├── src/
│   ├── api/              # API layer (crypto requests)
│   ├── assets/           # Static assets
│   ├── components/       # UI components
│   │   ├── assets-list/
│   │   ├── modals/
│   │   ├── charts/
│   │   ├── sidebar/
│   │   └── top-bar/
│   ├── data/             # Static configs / mock data
│   ├── layouts/          # Layout components
│   ├── pages/            # Route pages
│   ├── types/            # TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── .env
└── vite.config.ts
```


## 💬 Notes

This project is part of a personal frontend development journey focused on:

- real-world API integration  
- scalable React architecture  
- production-like project structure  

The goal is not perfection, but **continuous improvement through iteration**.

---

## 📌 Disclaimer

This project is for educational and portfolio purposes only.  
It is not intended for financial advice or real trading use.


## 🚀 Getting Started

If you want to run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crypto-finances-dashboard.git
cd crypto-finances-dashboard
```
### 2. Install the dependencies
```bash
npm install
```
### 3. Create enviroment variables
Create a .env file in the root directory and add your API key:
```
VITE_COINGECKO_API_KEY=your_api_key_here
```
### 4. Run the development server
```bash
npm run dev
```




