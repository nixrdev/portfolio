# Nishant Raj's Personal Site

Welcome to the codebase for my personal site. This project showcases my portfolio, including my skills, projects, and experiences.

## Features

- **Responsive Design**: Optimized for various screen sizes.
- **Modern Technologies**: Built with React, Tailwind CSS, and Framer Motion.
- **Interactive UI**: Smooth animations and transitions.
- **Content Sections**: Includes sections for Introduction, Technologies, Experience, and Projects.
- **Contact Form**: Backend integration for sending emails.

## Installation

To get started with the project, follow these steps:

1.  **Clone the repository**:

    ```sh
    git clone https://github.com/nixrdev/portfolio.git
    cd portfolio
    ```

2.  **Install frontend dependencies**:

    ```sh
    npm install
    ```

3.  **Setup Backend**:

    - Navigate to the backend directory: `cd ../backend_portfolio`
    - Install backend dependencies: `npm install`
    - Create a `.env` file in the `backend_portfolio` directory.
    - Add your Gmail credentials to the `.env` file:
      ```dotenv
      # .env file for backend
      EMAIL_USER=your_gmail_address@gmail.com
      EMAIL_PASS=your_gmail_app_password # Use an App Password, not your regular password
      PORT=3001 # Optional: specify a port
      ```
      **Note:** For `EMAIL_PASS`, it's highly recommended to use a Google App Password if you have 2-Step Verification enabled on your Google account. [Learn how to generate an App Password](https://support.google.com/accounts/answer/185833).
    - Start the backend server: `npm start` or `npm run dev` for development with Nodemon.

4.  **Run the frontend development server**:

    - Navigate back to the frontend directory: `cd ../portfolio`
    - Run the server:
      ```sh
      npm run dev
      ```

5.  **Build for production**:

    ```sh
    npm run build
    ```

6.  **Deploy frontend to GitHub Pages**:

    ```sh
    npm run deploy
    ```

    **Note:** The backend needs to be deployed separately (e.g., on Render, Heroku, Vercel Serverless Functions) for the contact form to work in the deployed frontend application. Update the `axios.post` URL in `src/components/Contact.jsx` to point to your deployed backend URL.

## Usage

After running the development servers (frontend and backend), you can view the site in your browser at `http://localhost:5173` (or the port specified by Vite).

## Project Structure

```
Portfolio_full/
├── backend_portfolio/ # Node.js backend for contact form
│   ├── .env.example   # Example environment file
│   ├── index.js
│   └── package.json
├── portfolio/         # React frontend
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md      # This file
│   ├── src/
│   │   ├── App.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
└── .vscode/
    └── settings.json
```

## Contact

Feel free to reach out if you have any questions or suggestions:

- **Email**: [nishantrajcs26@gmail.com](mailto:nishantrajcs26@gmail.com)
- **Educational Email**: [nishantraj@jklu.edu.in](mailto:nishantraj@jklu.edu.in)
- **Location**: Jaipur, Rajasthan, India
