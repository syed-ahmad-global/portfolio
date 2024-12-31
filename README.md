# 📂 Portfolio Project

Welcome to the **Portfolio Project**! 🚀
This is a minimal, modern, responsive 🖥️📱 portfolio built using

- React ⚛️
- Vite ⚡
- TailwindCSS 🎨.

[![Live Preview](https://img.shields.io/badge/🔗-Live%20Preview-blue?style=for-the-badge)](https://ahmad-shah.vercel.app/)

---

## ⭐ Features

- **📱 Responsive Design**: Optimized for all devices, from desktops 🖥️ to mobile phones 📱.
- **🔀 Dynamic Routing**: Pages include home 🏠, success ✅, error ❌, and contact forms 📧.
- **♻️ Reusable Components**: Modular structure for easy updates 🔧 and maintenance 🛠️.
- **⚡ Built with Vite**: Fast development 🏗️ and optimized builds 📦.
- **🐳 Dockerized Deployment**: Ready-to-use Dockerfile for seamless containerization 📦.
- **🎨 TailwindCSS Styling**: Efficient and flexible styling with modern CSS utility classes 🖌️.
- **📄 Integrated Form Handling**: Built using Formik 📝 and Yup ✅ for validation.

---

## 📜 Table of Contents

1. [🌐 Deployment](#deployment)
2. [🚀 Usage](#usage)
3. [🧰 Technologies Used](#technologies-used)
4. [📂 Project Structure](#project-structure)

---

### 🛠️ Steps

1. Clone the repository 📂:

   ```bash
   git clone https://github.com/syed-ahmad-global/portfolio.git
   cd portfolio
   ```

---

## 🌐 Deployment

### 🐳 Using Docker

1. Build the Docker image 🐳:

   ```bash
   docker build -t portfolio .
   ```

2. Run the Docker container 📦:

   ```bash
   docker run -p 3000:3000 portfolio
   ```

The app will be accessible at `https://localhost/3000` 🌐.

---

## 🚀 Usage

### 🆕 Adding New Pages

1. Create a new component in the `pages` folder 📂.
2. Add the route 🛤️ to `App.jsx`.

---

## 🧰 Technologies Used

- **⚛️ React**: Library for building user interfaces 🖥️.
- **🔀 React Router**: For navigation and routing 🛤️.
- **📝 Formik & Yup**: For form handling and validation ✅.
- **🎨 Heroicons**: For modern and accessible icons ✨.
- **🎨 TailwindCSS**: For efficient styling 🖌️.
- **⚡ Vite**: A fast and efficient build tool ⚙️.
- **🧹 ESLint**: For code quality and consistency ✅.
- **🐳 Docker**: For containerized deployments 📦.
- **🌐 Nginx**: To serve the production build 📡.

---

## 📂 Project Structure

```plaintext
portfolio/
├── components/       # ♻️ Reusable React components
├── pages/            # 📄 Page components
├── public/           # 📂 Static assets
├── src/              # 🗂️ Main source folder
├── Dockerfile        # 🐳 Dockerfile for deployment
├── package.json      # 📦 Project configuration and dependencies
├── README.md         # 📜 Project documentation
├── tailwind.config.js # 🎨 TailwindCSS configuration
└── vite.config.js    # ⚡ Vite configuration
```

---

## 🤝 Contributing

Contributions are welcome! 🥳 Please fork the repository 🍴 and submit a pull request 📩.

---

## 📜 License

This project is licensed under the MIT License 📜. Feel free to use and modify it as per your requirements ✅.

---

## 🙏 Acknowledgements

Special thanks 🙌 to all the open-source libraries 📚 and contributors 🤝 that made this project possible 💡.
