import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

const BLOB_MEDIA_ORIGIN =
  'https://agjr2io12d0kw6qt.public.blob.vercel-storage.com';

const IMAGE_EXTENSIONS = 'png|jpe?g|gif|webp|avif';
const IMAGE_LINE = /^!\[([^\]]*)\]\(([^)]+)\)\s*$/;
// Blob names keep spaces and accents (including combining marks). Slashes stay rejected.
const IMAGE_FILE = new RegExp(
  `^[\\p{L}\\p{M}0-9._ -]+\\.(${IMAGE_EXTENSIONS})$`,
  'iu'
);

export type PoemSegment =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string; alt: string };

function mediaUrl(fileName: string): string | null {
  if (
    !IMAGE_FILE.test(fileName) ||
    fileName.includes('/') ||
    fileName.includes('\\')
  ) {
    return null;
  }

  return `${BLOB_MEDIA_ORIGIN}/media/${encodeURIComponent(fileName)}`;
}

/**
 * Image lines in a poem file: `![caption](deseos.png)`
 * The filename is loaded from the public blob `media` folder.
 * Spaces and accents are kept exactly as the blob stores them.
 * A full blob URL under `/media/` is also accepted.
 */
export function resolveMediaSrc(raw: string): string | null {
  const value = raw.trim();

  if (/^https?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      if (url.origin !== BLOB_MEDIA_ORIGIN) return null;
      if (!url.pathname.startsWith('/media/')) return null;
      const fileName = decodeURIComponent(url.pathname.slice('/media/'.length));
      return mediaUrl(fileName);
    } catch {
      return null;
    }
  }

  const fileName = value.replace(/^\/?(?:media\/)/, '').replace(/^\/+/, '');
  return mediaUrl(fileName);
}

export async function getPoemContent(uid: string) {
    try {
      const poemsDir = join(process.cwd(), 'content', 'poems');
      const files = await readdir(poemsDir);
      
      // Find the file case-insensitively
      const targetFileName = `${uid}.txt`;
      const matchingFile = files.find(
        file => file.toLowerCase() === targetFileName.toLowerCase() && file.endsWith('.txt')
      );
  
      if (!matchingFile) {
        return null;
      }
  
      const filePath = join(poemsDir, matchingFile);
      const content = await readFile(filePath, 'utf-8');
      return content;
    } catch (error) {
      return null;
    }
  }
  
  export function parsePoemContent(content: string) {
    const lines = content.split('\n');
    let title: string | null = null;
    let sourceLines = lines;

    // Check if first line is a title (starts with #)
    if (lines[0]?.startsWith('#')) {
      title = lines[0].replace(/^#\s*/, '').trim();
      sourceLines = lines.slice(1);
    }

    const body: string[] = [];
    const segments: PoemSegment[] = [];
    const textLines: string[] = [];

    const flushText = () => {
      if (textLines.length === 0) return;
      segments.push({ type: 'text', value: textLines.join('\n') });
      textLines.length = 0;
    };

    for (const line of sourceLines) {
      const imageMatch = line.match(IMAGE_LINE);
      if (imageMatch) {
        const src = resolveMediaSrc(imageMatch[2]);
        if (src) {
          flushText();
          segments.push({
            type: 'image',
            src,
            alt: imageMatch[1].trim(),
          });
          continue;
        }
      }

      if (line.trim() === '') continue;
      body.push(line);
      textLines.push(line);
    }

    flushText();

    return { title, body, segments };
  }

  export async function getAllPoems() {
    try {
      const poemsDir = join(process.cwd(), 'content', 'poems');
      const files = await readdir(poemsDir);
      const txtFiles = files.filter(file => file.endsWith('.txt'));

      const poems = await Promise.all(
        txtFiles.map(async (file) => {
          const filePath = join(poemsDir, file);
          const content = await readFile(filePath, 'utf-8');
          const { title } = parsePoemContent(content);
          
          // Get slug from filename (remove .txt extension)
          const slug = file.replace(/\.txt$/i, '').toLowerCase();
          
          // Use filename as fallback title if no title found
          const displayTitle = title || file.replace(/\.txt$/i, '');

          return {
            slug,
            title: displayTitle,
            filename: file,
          };
        })
      );

      // Sort alphabetically by title
      return poems.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
      return [];
    }
  }