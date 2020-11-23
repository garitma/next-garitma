import { NextApiRequest, NextApiResponse } from "next";
import { PrismicClient } from "@services/prismic-graphql";

function linkResolver(doc) {
  if (doc.type === "noticias") {
    return `/${doc.uid}`;
  }

  return `/${doc.uid}`;
}

export default async function preview(req, res) {
  const ref = req.query.token;

  const url = await PrismicClient.previewSession(ref, linkResolver, "/");

  if (!url) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({
    ref,
  });

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  );

  res.end();
}
