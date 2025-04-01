// pages/api/redirect/[shortId].ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  originalUrl?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { shortId } = req.query;

  // Vérification du paramètre
  if (typeof shortId !== "string") {
    res.status(400).json({ error: "Invalid shortId" });
    return;
  }

  // Exemple de correspondance entre shortId et URL d'origine
  // Dans un cas réel, vous iriez chercher ces données dans une base de données.
  const links: { [key: string]: string } = {
    "8kvbcf": "https://www.snouzy.com",
    // ... d'autres liens possibles
  };

  const originalUrl = links[shortId];

  if (!originalUrl) {
    res.status(404).json({ error: "Link not found" });
    return;
  }

  // Optionnel : vous pouvez ajouter ici des appels pour enregistrer un clic,
  // vérifier des conditions en fonction du hostname, etc.

  res.status(200).json({ originalUrl });
}
