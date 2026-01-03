import { readFile, readdir } from 'fs/promises';
import { join } from 'path';

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
    let body: string[] = [];

    // Check if first line is a title (starts with #)
    if (lines[0]?.startsWith('#')) {
      title = lines[0].replace(/^#\s*/, '').trim();
      body = lines.slice(1).filter(line => line.trim() !== '' || body.length > 0);
    } else {
      body = lines.filter(line => line.trim() !== '' || body.length > 0);
    }

    return { title, body };
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