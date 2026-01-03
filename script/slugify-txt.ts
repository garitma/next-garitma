import * as fs from 'fs';
import * as path from 'path';

/**
 * Slugifies a string by:
 * - Converting to lowercase
 * - Removing/replacing accented characters
 * - Replacing spaces and special characters with hyphens
 * - Removing multiple consecutive hyphens
 * - Trimming hyphens from start and end
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Renames all .txt files in the content/poems directory to slugified versions
 */
function slugifyTxtFiles() {
  const poemsDir = path.join(process.cwd(), 'content', 'poems');
  
  if (!fs.existsSync(poemsDir)) {
    console.error(`Directory not found: ${poemsDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(poemsDir);
  const txtFiles = files.filter(file => file.endsWith('.txt'));

  if (txtFiles.length === 0) {
    console.log('No .txt files found in content/poems');
    return;
  }

  console.log(`Found ${txtFiles.length} .txt files to process...\n`);

  let renamedCount = 0;
  let skippedCount = 0;

  for (const file of txtFiles) {
    const filePath = path.join(poemsDir, file);
    const fileExtension = path.extname(file).toLowerCase(); // Ensure extension is lowercase
    const fileNameWithoutExt = path.basename(file, fileExtension);
    
    const slugifiedName = slugify(fileNameWithoutExt);
    const newFileName = `${slugifiedName}${fileExtension}`;
    const newFilePath = path.join(poemsDir, newFileName);

    // Skip if the filename is already slugified (no change needed)
    // Use case-sensitive comparison to ensure files are renamed to lowercase
    if (file === newFileName) {
      console.log(`✓ Skipped (already slugified): ${file}`);
      skippedCount++;
      continue;
    }

    // Check if a different file with the exact target name already exists (case-sensitive check)
    // On case-insensitive file systems, we need to check the actual directory listing
    const targetExistsExact = files.some(f => f === newFileName && f !== file);
    if (targetExistsExact) {
      console.log(`⚠ Skipped (target exists): ${file} -> ${newFileName}`);
      skippedCount++;
      continue;
    }

    try {
      fs.renameSync(filePath, newFilePath);
      console.log(`✓ Renamed: ${file} -> ${newFileName}`);
      renamedCount++;
    } catch (error) {
      console.error(`✗ Error renaming ${file}:`, error);
    }
  }

  console.log(`\n✅ Complete! Renamed: ${renamedCount}, Skipped: ${skippedCount}`);
}

// Run the script
slugifyTxtFiles();

