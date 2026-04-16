"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function PenSVG() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="none" strokeMiterlimit="10">
        <path
          fill="#fcdd00"
          stroke="#231f20"
          d="M21.29 6.83c-4 4-8.27 9.25-8.67 10.64a2.7 2.7 0 0 0-.34.88c-2.55-.28-5.19.71-7.69 3.22C0 26.15-.32 36.3 1.64 38.27s12.12 1.64 16.7-3c2.51-2.5 3.5-5.14 3.22-7.69a3.1 3.1 0 0 0 .88-.34c1.39-.4 6.67-4.7 10.64-8.67C40.93 10.77 40.8 7 36.87 3S28.53-.41 21.29 6.83Z"
          strokeWidth="1.5"
        />
        <path
          stroke="#231f20"
          strokeLinecap="round"
          d="M15.1 20a14 14 0 0 1 2.67 2.2A13.8 13.8 0 0 1 20 24.87"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const linePathRef = useRef<SVGPathElement>(null);
  const penRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (!linePathRef.current || !penRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(linePathRef.current, { strokeDashoffset: 0, opacity: 1 });
      gsap.set(penRef.current, { opacity: 1 });
      return;
    }

    const lineLength = linePathRef.current.getTotalLength();

    gsap.set(linePathRef.current, {
      strokeDasharray: lineLength,
      strokeDashoffset: lineLength,
      opacity: 0.9,
    });

    gsap.set(penRef.current, {
      opacity: 0,
      scale: 0.85,
      xPercent: -10,
      yPercent: -90,
      rotate: -18,
      transformOrigin: "50% 80%",
    });

    const tl = gsap.timeline({ delay: 0.9 });

    tl.to(penRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
      ease: "back.out(1.7)",
    })
      .to(
        linePathRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.25,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        penRef.current,
        {
          motionPath: {
            path: linePathRef.current,
            align: linePathRef.current,
            alignOrigin: [0.5, 0.8],
            autoRotate: false,
          },
          duration: 1.25,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(penRef.current, {
        x: "+=5",
        y: "-=4",
        rotate: -24,
        duration: 0.28,
        ease: "power2.out",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      dir="rtl"
      className="relative overflow-hidden  px-4 py-16 sm:px-8 sm:py-24"
    >
      <span className="pointer-events-none absolute right-[14%] top-16 text-2xl text-yellow-500">
        ✦
      </span>
      <span className="pointer-events-none absolute left-[15%] top-28 text-xl text-pink-400">
        ✦
      </span>
      <span className="pointer-events-none absolute right-[22%] top-52 text-sm text-violet-500">
        ●
      </span>
      <span className="pointer-events-none absolute left-[22%] top-60 text-sm text-indigo-500">
        ●
      </span>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="bg-secondary text-white capitalize px-4 py-3 rounded-2xl ">
            dz young leaders
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-7 max-w-3xl text-3xl font-extrabold leading-tight heading text-gradient-primary sm:text-5xl"
        >
          هل أنت مستعد لتقود التغيير وتُشارك في
          <span className="relative heading text-primary mx-2 inline-block pb-2">
            صناعة القرار
            <svg
              className="absolute inset-x-0 bottom-0 h-4 w-full overflow-visible"
              viewBox="0 0 140 28"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                ref={linePathRef}
                d="M136 16 C108 6, 76 25, 46 16 C25 10, 12 21, 4 16"
                fill="none"
                stroke="#FCDD00"
                strokeWidth="20"
                strokeLinecap="round"
              />
            </svg>
            <span
              ref={penRef}
              className="pointer-events-none absolute -left-5 -top-8 h-8 w-8 md:h-10 md:w-10"
              aria-hidden="true"
            >
              <PenSVG />
            </span>
          </span>
          ؟
        </motion.h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-2xl">
          مشروع البوصلة مبادرة شبابية تكوينية لتأهيل وتمكين الشباب في المجال
          السياسي عبر مسارات مهارية، قانونية، إدارية وسياسية.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-xl">
          نسعى إلى إعداد جيل واعٍ يفهم آليات العمل المؤسساتي ويشارك بفعالية في
          الحياة العامة، من خلال تكوينات تطبيقية تعزز الكفاءة والقيادة
          والمسؤولية.
        </p>
        <div className="flex flex-row items-center md:gap-4">
          <Link
            href="#about"
            className="mt-10 inline-flex heading min-h-14 w-full max-w-md bg-primary items-center justify-center rounded-xl px-5 md:px-8 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-primary/90 sm:mt-16 sm:text-2xl"
          >
            اكتشف الآن ✧
          </Link>
          <Link
            href="#about"
            className="mt-10 inline-flex heading min-h-14 w-full max-w-md bg-primary items-center justify-center rounded-xl px-8 text-sm font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-primary/90 sm:mt-16 sm:text-2xl"
          >
            اكتشف الآن ✧
          </Link>
        </div>

        <p className="mt-12 max-w-4xl text-2xl heading font-extrabold leading-relaxed sm:text-4xl">
          انضم وتطوع مع فريقنا في البحث والتطوير，
          <br className="hidden sm:block" />
          لتكون جزءًا من إرثنا الحضاري الخالد.
        </p>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">
          تم اختيار المشروع ضمن برنامج DZ Young Leaders التابع لوزارة الشباب
          وبالتنسيق مع المجلس الأعلى للشباب، مما يعكس أهمية دوره في دعم وتمكين
          الشباب الجزائري.
        </p>
      </div>
    </section>
  );
}
