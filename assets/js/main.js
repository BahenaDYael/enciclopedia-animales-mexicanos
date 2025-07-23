document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const dropdownMenu = document.getElementById("dropdown-menu");

  if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener("click", () => {
      const isHidden = dropdownMenu.hasAttribute("hidden");
      if (isHidden) {
        dropdownMenu.removeAttribute("hidden");
        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        dropdownMenu.setAttribute("hidden", "");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Load animals data and initialize gallery and search if on index.html
  if (document.getElementById("gallery")) {
    fetch("assets/data/animals.json")
      .then((response) => response.json())
      .then((animals) => {
        populateGallery(animals);
        setupSearch(animals);
      })
      .catch((error) => {
        console.error("Error loading animals data:", error);
        const gallery = document.getElementById("gallery");
        if (gallery) {
          gallery.innerHTML = "<p>No se pudo cargar la galería.</p>";
        }
      });
  }

  // Load animal detail if on ficha-animal.html
  if (document.getElementById("animal-detail")) {
    fetch("assets/data/animals.json")
      .then((response) => response.json())
      .then((animals) => {
        loadAnimalDetail(animals);
      })
      .catch((error) => {
        console.error("Error loading animal detail data:", error);
        const detailSection = document.getElementById("animal-detail");
        if (detailSection) {
          detailSection.innerHTML = "<p>No se pudo cargar la información del animal.</p>";
        }
      });
  }
});

// Populate gallery with animal images and links
function populateGallery(animals) {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  gallery.innerHTML = "";

  animals.forEach((animal) => {
    const link = document.createElement("a");
    link.href = `ficha-animal.html?id=${animal.id}`;
    link.setAttribute("aria-label", `Ver ficha de ${animal.nombre}`);

    const img = document.createElement("img");
    img.src = animal.imagen || "assets/images/placeholder.jpg";
    img.alt = animal.nombre;

    link.appendChild(img);
    gallery.appendChild(link);
  });
}

// Setup search functionality
function setupSearch(animals) {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  if (!searchForm || !searchInput || !searchResults) return;

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      searchResults.innerHTML = "<p>Por favor, ingrese un término de búsqueda.</p>";
      return;
    }

    const filtered = animals.filter((animal) => {
      return (
        animal.nombre.toLowerCase().includes(query) ||
        (animal.categoria && animal.categoria.toLowerCase().includes(query))
      );
    });

    if (filtered.length === 0) {
      searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }

    searchResults.innerHTML = "";
    filtered.forEach((animal) => {
      const div = document.createElement("div");
      div.className = "search-result-item";

      const link = document.createElement("a");
      link.href = `ficha-animal.html?id=${animal.id}`;
      link.textContent = animal.nombre;

      div.appendChild(link);
      searchResults.appendChild(div);
    });
  });
}

// Load animal detail based on URL parameter
function loadAnimalDetail(animals) {
  const detailSection = document.getElementById("animal-detail");
  if (!detailSection) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    detailSection.innerHTML = "<p>ID de animal no especificado.</p>";
    return;
  }

  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) {
    detailSection.innerHTML = "<p>Animal no encontrado.</p>";
    return;
  }

  // Build animal detail HTML
  const html = `
    <h2>${animal.nombre}</h2>
    <img src="${animal.imagen || 'assets/images/placeholder.jpg'}" alt="${animal.nombre}" />
    <p><strong>Nombre Científico:</strong> ${animal.nombreCientifico || "N/A"}</p>
    <p><strong>Origen:</strong> ${animal.origen || "N/A"}</p>
    <p><strong>Reproducción:</strong> ${animal.reproduccion || "N/A"}</p>
    <p><strong>Estatus de Conservación:</strong> ${animal.estatusConservacion || "N/A"}</p>
    <p><strong>Hábitat:</strong> ${animal.habitat || "N/A"}</p>
    <p><strong>Historia Cultural:</strong> ${animal.historiaCultural || "N/A"}</p>
    <p><strong>Investigaciones Contemporáneas:</strong> ${animal.investigaciones || "N/A"}</p>
  `;

  detailSection.innerHTML = html;
}
