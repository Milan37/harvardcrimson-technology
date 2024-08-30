import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Changelog.module.css';

interface ChangelogEntry {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

async function getChangelogEntries(): Promise<ChangelogEntry[]> {
  const changelogDirectory = path.join(process.cwd(), 'src/content/changelog');
  const filenames = fs.readdirSync(changelogDirectory);
  
  const changelogEntries = await Promise.all(filenames.map(async (filename) => {
    const filePath = path.join(changelogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    const matterResult = matter(fileContents);
    
    const processedContent = await remark()
      .use(html, { sanitize: false }) // Allow HTML in the markdown
      .process(matterResult.content);
    let contentHtml = processedContent.toString();
    
    // Add custom classes to headers
    contentHtml = contentHtml.replace(/<h2/g, '<h2 class="text-xl font-bold mt-6 mb-4"');
    contentHtml = contentHtml.replace(/<h3/g, '<h3 class="text-lg font-semibold mt-4 mb-2"');
    
    return {
      id: filename.replace(/\.md$/, ''),
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml,
    };
  }));

  // Sort entries by date, most recent first
  return changelogEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

async function ChangelogPage() {
  const changelogEntries = await getChangelogEntries();

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      <div className="absolute top-0 right-2 p-4 mt-[-210px]">
        <Link href="/">
          <Image 
            src="/logo2.svg"
            alt="The Crimson Logo"
            width={300}
            height={300}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Changelog</h1>
        {changelogEntries.map((entry) => (
          <div key={entry.id} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {entry.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
            <div 
              className={`prose max-w-none ${styles.prose}`}
              dangerouslySetInnerHTML={{ __html: entry.contentHtml }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChangelogPage;