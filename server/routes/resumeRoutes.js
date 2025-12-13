import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  const resumePath = path.join(__dirname, "../resume/Rajadurai_A_Resume.pdf");
  res.download(resumePath, "Rajadurai-Resume.pdf", (err) => {
    if (err) {
      res.status(500).send("Error downloading resume");
    }
  });
});

export default router;
