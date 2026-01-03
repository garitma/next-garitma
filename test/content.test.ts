import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

// Define your rules here
const SLUG_REGEX = /^[a-z0-9-]+$/;

describe('Content Files Validation', () => {
  const files = globSync('content/**/*.txt');

  files.forEach((file) => {
    it(`should validate ${file}`, () => {
      const content = fs.readFileSync(file, 'utf-8');
      const fileName = path.basename(file, '.txt');

      // Rule 1: Check if slugify will work (no weird characters in filename)
      // Filenames should be lowercase with hyphens only
      expect(fileName).toMatch(SLUG_REGEX);

      // Rule 2: Check for title header (starts with #) - mandatory
      // All files must have # Title format
      expect(content.trim()).toMatch(/^#\s+.+/m);

      // Rule 3: Content length (should have content)
      expect(content.length).toBeGreaterThan(10);

      // Rule 4: Word count (should have at least 10 words)
      // Remove title header, then count words
      const contentWithoutTitle = content.replace(/^#\s+.+$/m, '').trim();
      const words = contentWithoutTitle.split(/\s+/).filter(word => word.length > 0);
      expect(words.length).toBeGreaterThanOrEqual(10);
    });
  });
});

