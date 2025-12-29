# AImate - AI SaaS Dashboard

**AImate** is a high-performance, professional-grade admin interface designed for modern AI platforms. Built with **Next.js 15**, this dashboard demonstrates a deep understanding of data visualization, complex state management, and type-safe form architecture.

---

## 🌟 Key Features

* **📊 Dynamic Analytics:** Real-time data visualization using **Recharts**, featuring interactive area charts and distribution breakdowns for AI credit monitoring.
* **👥 Advanced User Management:** A robust user table powered by **TanStack Table v8**, including professional pagination, status badges, and search capabilities.
* **⚡ Command Palette (CMD+K):** A global search and navigation tool for power users, allowing instant access to any part of the platform.
* **🛡️ Type-Safe Settings:** Complex form management using **React Hook Form** and **Zod** validation, ensuring data integrity with immediate UI feedback.
* **💳 Subscription & Billing:** A tiered pricing interface with a detailed invoice history and transaction management.
* **🎨 Premium UI/UX:** A fully responsive, dark-mode-optimized design built with **Shadcn/UI** and smooth micro-interactions powered by **Framer Motion**.

---

## 🛠️ Technical Highlights

### Performance & Architecture

* **Next.js 15 App Router:** Utilized nested layouts to minimize re-renders and optimize navigation speed.
* **Component-Driven Development:** Built a reusable library of UI primitives (cards, buttons, fields) using **Tailwind CSS**.
* **Redirect Logic:** Optimized the root entry point to immediately guide users to the core dashboard experience, reducing bounce rates.

### Data & Validation

* **Schema-First Forms:** Used **Zod** to create a single source of truth for both TypeScript types and runtime validation, preventing "silent bugs" in configuration.
* **Flexible Data Display:** Implemented **TanStack Table** to handle tabular data with a focus on scalability and ease of integration with future backend APIs.

---

## 💻 Tech Stack

| Category | Technology |
| --- | --- |
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS |
| **Components** | Shadcn/UI (Radix UI) |
| **Charts** | Recharts |
| **Tables** | TanStack Table v8 |
| **Forms** | React Hook Form + Zod |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |

---

## 📂 Project Structure

```text
├── app/
│   ├── dashboard/          # Core Dashboard Routes
│   │   ├── users/          # User Management
│   │   ├── usage/          # Analytics & Metrics
│   │   ├── settings/       # Form Validation Logic
│   │   └── billing/        # Subscription UI
│   └── page.tsx            # Root Redirect Logic
├── components/
│   ├── dashboard/          # Dashboard specific components
│   └── ui/                 # Shadcn/UI Base Components
├── lib/                    # Shared utility functions
└── public/                 # Static assets

```

---

## 🚀 Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/aimate-dashboard.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🔴 Live Preview
```
https://aimate-admin.vercel.app/
```
