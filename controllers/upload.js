const fs = require("fs");
const Json = require("../models/model");
const ctrlWrapper = require("../helpers/ctrlWrapper");

const uploadFile = async (req, res) => {
  const filePath = req.file.path;

  fs.readFile(filePath, "utf8", async (error, data) => {
    if (error) {
        console.error("Error reading file:", error);
        return res.status(500).json({ message: "Error reading file" });
      }

    try {
      const jsonFile = JSON.parse(data);
      const newData = new Json(jsonFile);
      await newData.save();

      res.status(200).json( {data: newData.results.app_opens});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
};

module.exports = ctrlWrapper(uploadFile);
