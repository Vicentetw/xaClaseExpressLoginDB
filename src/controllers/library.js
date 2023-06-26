const { getLibrary, getAllLibraries, updateLibrary, deleteLibrary, addBookToLibrary } = require("../services/library");

const createLibrary = async (req, res) => {
  try {
    // Lógica para crear una librería
    const { name, location, telefono } = req.body;

    // Validación de datos
    if (!name || !location || !telefono) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const newLibrary = await createLibrary({
      name,
      location,
      telefono,
    });

    return res.status(201).json(newLibrary);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Resto del código de los controladores

module.exports = {
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
  addBookToLibrary,
};
