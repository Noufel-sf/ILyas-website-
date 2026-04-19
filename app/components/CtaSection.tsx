import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react';

function CtaSection() {
  return (
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-linear-to-r from-primary to-third px-8 py-16 text-center shadow-xl sm:px-12">
          <h2 className="heading mb-4 text-3xl font-bold text-white sm:text-4xl">
            هل أنت مستعد للانطلاق؟
          </h2>
          <p className="mb-8 text-lg leading-8 text-white/90">
            انضم إلى مشروع البوصلة وكن جزءاً من حركة شبابية تسعى لبناء مستقبل أفضل
            للجزائر من خلال القيادة الواعية والمسؤولة.
          </p>
          <Link
            href="/contact"
            className="group heading inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-lg font-bold text-primary shadow-lg transition-all hover:scale-105"
          >
            تواصل معنا الآن
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </section>
  )
}

export default CtaSection