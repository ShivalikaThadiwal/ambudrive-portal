AmbuDrive: AI-Powered Ambulance Dispatch System
AmbuDrive is an intelligent, city-scale emergency response platform designed to optimize ambulance dispatching, reduce response times, and improve patient outcomes through AI-driven triage and routing.

🚀 Overview
AmbuDrive is a comprehensive dispatch system managing 100+ ambulances across a city-level deployment. It integrates real-time GPS tracking, AI-based severity classification, and automated routing to ensure critical patients receive the fastest possible medical care.

🛠 Tech Stack
Framework: Next.js 16 (App Router) for high-performance SSR and routing.

Language: TypeScript/JavaScript.

Styling: Tailwind CSS for responsive, mobile-first design.

Mapping: Leaflet.js & React-Leaflet for spatial tracking and routing.

State Management: React Hooks (useState, useEffect).

📂 Project Structure
src/app/: Handles application routing for dashboard, login, and dispatch modules.

src/components/: Reusable UI components including the Map.js (GIS integration) and Sidebar.js.

public/: Static assets and icons.

📋 Key Features
Live Fleet Tracking: Real-time visualization of ambulance status (Available/En-route/Offline).

Emergency Triage: AI-driven severity analysis to prioritize critical requests.

Optimized Routing: Intelligent path computation using hospital gate coordinates to reduce last-mile confusion.

Responsive Dashboard: Mobile-first interface designed for field drivers and dispatch centers.

⚙️ Getting Started
Clone the repository:

Bash
git clone <your-repo-url>
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open in browser:
Visit http://localhost:3000/login to view the dashboard.

📈 Architecture & Compliance
This project follows the AI Ambulance Dispatch System Architecture v2.0 blueprint.

Fast/Scalable: Built for <300ms emergency dispatch latency.

Modular Design: Decoupled AI services and real-time WebSocket communication.
