"use client";

import { register } from "swiper/element/bundle";
register();

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import projectData from "@/data/data.json";

export default function Projects() {
  const data = projectData.data || [];
  const swiperRef = useRef<any>(null);
  const [indexAt, setIndexAt] = useState(0);

  const slideToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setIndexAt(swiperRef.current.activeIndex);
    }
  };

  const slideToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setIndexAt(swiperRef.current.activeIndex);
    }
  };

  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Projects
      </h3>

      {/* Navigation Arrows */}
      <div className="absolute flex justify-between w-full z-40 pl-4 pr-2 md:max-w-2xl mt-16 md:mt-10 dark:text-white text-gray-800">
        <button
          onClick={slideToPrev}
          disabled={indexAt === 0}
          aria-label="Previous Project"
          className={`h-8 w-8 md:w-14 md:h-14 ${
            indexAt === 0 ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          ⬅
        </button>

        <button
          onClick={slideToNext}
          disabled={data.length === 0 || indexAt === data.length - 1}
          aria-label="Next Project"
          className={`h-8 w-8 md:w-14 md:h-14 ${
            data.length === 0 || indexAt === data.length - 1
              ? "opacity-20 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          ➡
        </button>
      </div>

      {/* Swiper */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper: any) => (swiperRef.current = swiper)}
          onSlideChange={() => setIndexAt(swiperRef.current?.activeIndex || 0)}
        >
          {data.length === 0 ? (
            <SwiperSlide>
              <div className="text-center w-full py-24 text-gray-400">
                No projects found.
              </div>
            </SwiperSlide>
          ) : (
            data.map((project: any, i: number) => (
              <SwiperSlide key={i}>
                <article
                  className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen mt-10 md:mt-28"
                  aria-label={`Project ${i + 1}: ${project.title}`}
                >
                  <h4 className="text-xl font-semibold md:text-2xl text-center text-black dark:text-white mb-4">
                    {`Project ${i + 1} of ${data.length}`} — {project.title}
                  </h4>

                  <Image
                    width={400}
                    height={400}
                    src={project.imgurl}
                    alt={project.title || "Project Image"}
                    className="w-[300px] md:w-[400px] rounded-t-md object-contain cursor-grab"
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback.png")
                    }
                    loading="lazy"
                  />

                  <div className="px-8 w-[300px] md:w-[400px] py-7 font-outfit shadow-lg bg-slate-100/20 dark:bg-gray-700/30 backdrop-blur-sm md:text-left rounded-b-md space-y-4 cursor-grab">
                    <div className="text-xs font-light dark:font-extralight space-y-1 text-gray-700 dark:text-gray-200">
                      {project.githubLink && project.githubLink !== "#" ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="underline block"
                        >
                          GitHub
                        </a>
                      ) : (
                        <span className="italic opacity-50 block">
                          GitHub: Uploaded Soon
                        </span>
                      )}

                      {project.deployedLink && project.deployedLink !== "#" ? (
                        <a
                          href={project.deployedLink}
                          target="_blank"
                          rel="noreferrer"
                          className="underline block"
                        >
                          Live
                        </a>
                      ) : (
                        <span className="italic opacity-50 block">
                          Live: Uploaded Soon
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-normal dark:font-light md:text-base mt-3 text-gray-800 dark:text-gray-100 line-clamp-4">
                      {project.content}
                    </p>

                    <div className="flex gap-2 mt-2 font-normal dark:font-light text-sm items-center text-gray-700 dark:text-gray-400">
                      <span>Tech stack:</span>
                      {project.tech?.map((tech: any, index: number) => (
                        <Image
                          key={index}
                          width={20}
                          height={20}
                          src={tech.tech}
                          alt="tech"
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>

      <div className="w-full absolute top-[27%] bg-gradient-to-r from-blue-500 opacity-70 dark:opacity-30 left-0 h-[500px] -skew-y-12" />
    </section>
  );
}
