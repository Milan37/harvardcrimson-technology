"use client"
import React, { FC, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  id: number;
  title: string;
  desc: string;
  img: string;
}

const items: TeamMember[] = [
  {
    id: 1,
    title: 'Neil H. Shah',
    desc: "Technology Chair, Harvard College '26",
    img:
      'https://media.licdn.com/dms/image/D4E03AQFeWcoB3fLMXw/profile-displayphoto-shrink_200_200/0/1681108989927?e=2147483647&v=beta&t=ssQOvXm5bNf__OBU4UIJNagxeSuzlKOAFJbggmlZft8',
  },
  {
    id: 2,
    title: 'Denius S. Eum',
    desc: "Technology Chair, Harvard College '26",
    img: 'https://cs121.boazbarak.org/staff/DennisEum.jpg',
  },
  {
    id: 3,
    title: 'Alexander D. Cai ',
    desc: "Director of Graphics, Harvard College '25",
    img:
      'https://media.licdn.com/dms/image/C5603AQFymK__vyBN5w/profile-displayphoto-shrink_800_800/0/1623863718800?e=1718236800&v=beta&t=DM71O0FQGM-A5YNxzUKgKqaMPEzd_EJbyBenKTIAGgk',
  },
  {
    id: 4,
    title: 'Victoria A. Kauffman',
    desc: "Director of Fullstack Development, Harvard College '26",
    img:
      'https://media.licdn.com/dms/image/C4D03AQGow9NRN2WKOg/profile-displayphoto-shrink_800_800/0/1656899145800?e=1718236800&v=beta&t=4r0WwJ3mOLEkhds5zBe2G-yfnzUo-h-YrmkH9jb4l3c',
  },
  {
    id: 5,
    title: 'Grayson M. Martin',
    desc: "Director of Data Journalism, Harvard College '25",
    img:
      'https://media.licdn.com/dms/image/D5603AQGwsoRteTa4cA/profile-displayphoto-shrink_800_800/0/1696781295917?e=2147483647&v=beta&t=W5VJ_3U6GOcP5ODQxx5G5s-h2CA3QZzbm6fiZ2XwKzY',
  },
  {
    id: 6,
    title: 'Milan Naropanth',
    desc: "Director of Staff Development, Harvard College '27",
    img:
      'https://media.licdn.com/dms/image/D4E03AQF3CkwF_zd83Q/profile-displayphoto-shrink_800_800/0/1712245257987?e=1718236800&v=beta&t=KaIeG0iUencexllxSRLfkiyCUIaJ7DVDmSZKdke-ou0',
  },
];

const TeamPage: FC = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setProgress(v);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

  return (
    <div className="relative h-full">
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
        initial={{ y: '-200vh' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center items-center pt-32"
      >
        {items.map((item) => (
          <motion.div
            className="flex flex-col items-center justify-center m-4 w-1/3"
            key={item.id}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-56 h-40 md:w-64 md:h-48 lg:w-80 lg:h-56 rounded-xl overflow-hidden mb-2">
              <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
            </div>
            <h1 className="text-sm md:text-lg lg:text-xl font-bold text-black text-center">
              {item.title}
            </h1>
            <p className="text-xs md:text-sm lg:text-md text-center text-black">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center"
      >
        <h1 className="text-8xl">
          interested? see more&nbsp;
          <a
            href="https://comp.thecrimson.com/tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#840B10' }}
          >
            here
          </a>
          !
        </h1>
      </motion.div>

      <motion.div
        style={{ scaleX: progress, backgroundColor: '#840B10' }}
        className="fixed bottom-0 left-0 right-0 h-2"
      />
    </div>
  );
};

export default TeamPage;