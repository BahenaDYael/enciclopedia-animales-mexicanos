
Built by https://www.blackbox.ai

---

# Enciclopedia de Animales Mexicanos

## Project Overview
The "Enciclopedia de Animales Mexicanos" is a web-based project designed to educate users about the diverse wildlife of Mexico. The platform aims to explore the rich biodiversity present in the region while fostering awareness about conservation and the cultural significance of various species.

## Installation
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Navigate into the project directory**:
   ```bash
   cd enciclopedia-animales-mexicanos
   ```
3. **Open the `index.html` file in your web browser**:
   You can do this directly by double-clicking on the `index.html` file or by using a local server.

## Usage
- **Explore Animals**: Navigate through the site using the main navigation buttons to access different sections such as Fichas, Galería, and Contacto.
- **Add Animal Data**: Use the form under the Ficha de Animal section to submit information about different animals.
- **Search Animals**: Use the search bar to find specific animals by name or category. The results will dynamically display relevant entries.

## Features
- Interactive sections for animal information, galleries, and contact forms.
- Form submission to save animal data locally using browser storage.
- Search functionality to filter through submitted animal data.
- Aesthetic and responsive design tailored for a naturalistic viewing experience.

## Dependencies
This project leverages the following external libraries:
- **Font Awesome**: For icons used in navigation buttons and other elements.
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
   ```

No additional dependencies were found in a `package.json` as the project is primarily HTML, CSS, and JavaScript without a dedicated package manager setup.

## Project Structure
The project has the following structure:

```
.
├── index.html          # Main entry point of the application
├── ficha-animal.html   # Dedicated page for detailed animal information
├── sobre.html          # Information about the project
└── assets              # Directory for additional assets (if any)
    ├── css            # Stylesheets (Currently linked directly)
    └── js             # JavaScript files for functionality (if any)
```

### Notes
- Ensure that JavaScript is enabled in your browser for the best experience.
- The form data is stored in local storage; if you clear your browser’s storage, previously submitted data will be lost.

Feel free to customize and expand this project to include more animal profiles and features!