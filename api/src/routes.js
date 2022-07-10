import { Router } from "express";
import mergePdfs from "./merge-pdf.js";

const routes = new Router();

routes.post("/merge", async (req, res) => {
  try {
    return res.json({
      pdf_buffer: await mergePdfs(req.files?.file),
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default routes;
