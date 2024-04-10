"use client"
import { FC, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: FC = () => {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setProgress(v);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div className="relative">
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
                className="flex justify-center p-4 overflow-auto"
                initial={{ y: "-200vh" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <div className="w-full md:w-3/4 lg:w-1/2 text-center">
                    <motion.p
                        className="text-xl md:text-2xl mb-8"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <strong>The Crimson's Tech board</strong> is the only organization on campus where you'll get to work on a tech-related project with real users, real consequences, and real-world experience.
                    </motion.p>
                    <motion.img
                        src="/react.svg"
                        alt="React"
                        width={150}
                        height={150}
                        className="mb-8 mx-auto"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <p className="text-xl md:text-2xl mb-8">
                        This year will be more exciting than ever. Learn how to work in teams as engineers, and contribute to the largest redesign of The Crimson site and backend to date — happening this year — using industry-relevant frameworks such as <strong>React</strong>, <strong>NextJS</strong>, and <strong>TailwindCSS</strong>. For people interested in backend development, The Crimson also has an extensive stack built with <strong>Docker</strong>, <strong>Django</strong>, <strong>GraphQL</strong>, and <strong>PostgreSQL</strong>, hosted on <strong>AWS</strong>.
                    </p>
                    <motion.img
                        src="/nextjs.svg"
                        alt="Next.js"
                        width={150}
                        height={150}
                        className="mb-8 mx-auto"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <p className="text-xl md:text-2xl mb-8">
                        You'll be working with a production code-base and see the impact: The Crimson gets <strong>21 million views a year</strong>, and we are the go-to source for Harvard-related news.
                    </p>
                    <motion.img
                        src="/docker.svg"
                        alt="Docker"
                        width={150}
                        height={150}
                        className="mb-8 mx-auto"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <p className="text-xl md:text-2xl mb-8">
                        The Tech Comp is designed to accommodate programmers with <strong>all levels of experience</strong>. It will be highly beneficial for the comp to be experienced with some other programming language; it doesn’t have to be web development.
                    </p>
                    <motion.img
                        src="/postgresql.svg"
                        alt="PostgreSQL"
                        width={150}
                        height={150}
                        className="mb-8 mx-auto"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <p className="text-xl md:text-2xl mb-8">
                        If you have any questions or special circumstances you want to discuss, contact the Tech Chairs <strong>Neil Shah</strong> at <a href="mailto:neil.shah@thecrimson.com" style={{ color: '#840B10' }}>neil.shah@thecrimson.com</a> and <strong>Dennis Eum</strong> at <a href="mailto:dennis.eum@thecrimson.com" style={{ color: '#840B10' }}>dennis.eum@thecrimson.com</a>.
                    </p>
                </div>
            </motion.div>
            <motion.div
                style={{ scaleX: progress, backgroundColor: '#840B10' }}
                className="fixed bottom-0 left-0 right-0 h-2"
            />
        </div>
    );
}

export default AboutPage;