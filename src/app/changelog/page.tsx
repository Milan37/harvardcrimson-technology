"use client"
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

interface Update {
  date: string;
  author: string;
  details: JSX.Element;
}

const updates: Update[] = [
    {
        date: '2024-04-10',
        author: 'Neil H. Shah',
        details: (
          <div>
            <p className="font-bold">New:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Per News' request, the website now allows scheduled content publication. To use this feature, enter a date and time into the relevant boxes on the article creation form and leave it as a draft when you save. At the desired time (plus or minus a few seconds, due to potential differences in computer and server time), it'll switch to published and go up as expected.</li>
              <li>Per DS' request, Chartbeat integration fully works now. Content is separated out by author and by section. It does not apply retroactively on past articles (I'm not sure if this is possible under our layout architecture — still investigating), but all articles going forward will be tagged and marked correctly.</li>
              <li>There were a handful of quality of life updates made. The page regeneration script should be rewritten, so certain pages (/leadership-crisis/ and /metro/) that were previously not being regenerated when articles went up are now actually being regenerated. (The former impacts News and the latter impacts News and Arts.)</li>
              <li>Some random frontend web stuff was updated. For example, our website actually has the X logo as opposed to the old Twitter bird. I also updated the Arts playlist to their latest (as of a week ago, I hope it's not outdated already, oops).</li>
            </ol>
      
            <p className="font-bold mt-4">Known Issues:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>The contributors box is visually glitched and the cursor appears slightly below. This does not impact the actual function of the box and is purely a visual error. You should still be able to use it.</li>
              <li>Some users have reported slowness or loading failure from the contributors box. Tech has not been able to reproduce this, so at the moment we are chalking it up to poor WiFi (a common occurrence at 14 Plympton). That being said, if we are able to reproduce it, we will move this into our queue and take a deeper look.</li>
              <li>I have a deep-seated suspicion that the Most Read isn't updating. While I love that one of my articles is being featured (slay), I don't think it was an interesting enough article to warrant fifth on the most read four days after publication. If it doesn't update for another two days (confirming my suspicions), I'll fix it this weekend.</li>
            </ol>

            <p className="font-bold mt-4">Next Update (tentatively scheduled for Saturday, April 20):</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Substantive visual updates to some or all of the section pages (depending on how difficult my pset that's being released tonight is). If you have strong thoughts, hit me up. This does not apply to FM or Flyby (though y'all already have pages that don't look like they're from 2010).</li>
              <li>A link shortening tool to make Tweeting (I refuse to call it "posting to X") less painful from a character limit perspective. More on this later.</li>
              <li>The smallest thing but: a way for Arts to set their playlist themselves. I am sorry I do not update it more frequently, but hopefully this way y'all can do it.</li>
              <li>Bug fixes for known issues.</li>
            </ol>
          </div>
        )
      },            
];

const ChangelogPage: FC = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setProgress(v);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

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

      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6"
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Changelog</h1>
        {updates.map((update: Update, index: number) => (
            <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {update.date},<span className="mx-2"></span>{update.author}
                </h2>
                <div className="text-gray-600">
                {update.details}
                </div>
            </div>
            ))}
      </motion.div>

      <motion.div
        style={{ scaleX: progress, backgroundColor: '#840B10' }}
        className="fixed bottom-0 left-0 right-0 h-2"
      />
    </div>
  );
};

export default ChangelogPage;