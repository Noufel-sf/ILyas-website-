import React from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import CtaSection from "../components/CtaSection";

export default function AboutPage() {
  const highlights = [
    {
      title: "تأهيل شامل",
      description:
        "برنامج متكامل يغطي المسارات المهارية والقانونية والإدارية والسياسية.",
    },
    {
      title: "قيادة واعية",
      description:
        "نعد جيلاً قادراً على فهم الحياة العامة والمشاركة الفعالة فيها.",
    },
    {
      title: "هوية قوية",
      description:
        "نحافظ على التراث الثقافي ونطوره ليكون منطلقاً للتغيير الإيجابي.",
    },
    {
      title: "شراكات استراتيجية",
      description:
        "دعم من وزارة الشباب والمجلس الأعلى للشباب ضمن برنامج DZ Young Leaders.",
    },
  ];

  const programPillars = [
    {
      number: "01",
      title: "المهارات القيادية",
      description:
        "تطوير مهارات الاتصال، إدارة المشاريع، حل المشاكل، واتخاذ القرارات الاستراتيجية.",
    },
    {
      number: "02",
      title: "الوعي السياسي",
      description:
        "فهم عميق لآليات العمل المؤسساتي، النظم السياسية، والقوانين والتشريعات.",
    },
    {
      number: "03",
      title: "المسؤولية الاجتماعية",
      description:
        "تدريب عملي على المشاركة الفعالة في الحياة العامة وخدمة المجتمع.",
    },
  ];

  return (
    <main dir="rtl" className="min-h-screen ">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(10,153,0,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(224,47,117,0.08),transparent_40%)]" />

        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-primary/10 px-5 py-2.5">
            <span className="text-sm font-semibold text-primary heading">
              من نحن
            </span>
          </div>

          <h1 className="heading mb-6 text-5xl font-bold leading-tight  text-slate-900 sm:text-6xl lg:text-7xl">
            مشروع
            <span className="text-primary heading marker-underline"> البوصلة</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            مبادرة شبابية تكوينية تسعى إلى تأهيل وتمكين الشباب الجزائري في
            المجال السياسي وصناعة القرار، من خلال تكوينات تطبيقية تعزز الكفاءة
            والقيادة والمسؤولية.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-secondary"
            >
              انضم إلينا الآن
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <article className="rounded-3xl border border-primary/20 bg-linear-to-br from-white to-primary/5 p-8 shadow-sm sm:p-10">
              <div className="mb-4 inline-block rounded-full bg-primary/15 p-3">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="heading mb-4 text-3xl font-bold text-slate-900">
                مهمتنا
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                تأهيل جيل واعٍ من الشباب الجزائري بمعارف ومهارات سياسية وقيادية
                متقدمة، قادر على فهم آليات العمل المؤسساتي والمشاركة الفعالة في
                صناعة القرار، بما يعكس التزامنا بخدمة الوطن وتطويره.
              </p>
            </article>

            {/* Vision */}
            <article className="rounded-3xl border border-primary/20 bg-linear-to-br from-white to-primary/5 p-8 shadow-sm sm:p-10">
              <div className="mb-4 inline-block rounded-full bg-primary/15 p-3">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="heading mb-4 text-3xl font-bold text-slate-900">
                رؤيتنا
              </h2>
              <p className="text-lg leading-8 text-slate-600">
                بناء حركة شبابية قيادية قوية تمثل قيم الوطنية والمسؤولية
                والأمانة، وتسهم في بناء مستقبل مشرق للجزائر من خلال مشاركة فعالة
                وواعية في الحياة السياسية والعامة.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-16 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
         ما  الدي <span className="heading  marker-underline text-primary">يميزنا</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-primary/15 bg-white p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-2.5">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="heading mb-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Pillars ── */}
      {/* <section className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-primary" />
        <div className="absolute inset-0 -z-10 bg-(image:--gradient-primary) opacity-70" />

        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
            أركان البرنامج
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-8 text-white/90">
            يقوم مشروع البوصلة على ثلاثة أركان أساسية تعمل معاً لإعداد القادة
            السياسيين الواعيين
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {programPillars.map((pillar, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 text-5xl font-bold text-white/20">
                  {pillar.number}
                </div>
                <h3 className="heading mb-4 text-2xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-base leading-8 text-white/80">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Impact Stats ── */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-white p-8 text-center">
              <div className="heading mb-3 text-4xl font-bold text-primary sm:text-5xl">
                390+
              </div>
              <p className="text-lg font-semibold text-slate-700">
                شاب وشابة مهتمين
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-white p-8 text-center">
              <div className="heading mb-3 text-4xl font-bold text-primary sm:text-5xl">
                4
              </div>
              <p className="text-lg font-semibold text-slate-700">
                مسارات تدريبية
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-linear-to-br from-primary/10 to-white p-8 text-center">
              <div className="heading mb-3 text-4xl font-bold text-primary sm:text-5xl">
                DZ
              </div>
              <p className="text-lg font-semibold text-slate-700">
                دعم رسمي وطني
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading mb-16 text-center text-4xl font-bold text-slate-900 sm:text-5xl">
            قيمنا <span className="text-primary marker-underline heading">الأساسية</span>
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "النزاهة",
                desc: "الالتزام بالصدق والشفافية في كل أعمالنا وقراراتنا.",
              },
              {
                title: "الكفاءة",
                desc: "تطوير مهارات عملية قابلة للتطبيق الفوري في الواقع.",
              },
              {
                title: "الشمولية",
                desc: "فتح الفرص أمام جميع الشباب بغض النظر عن خلفياتهم.",
              },
              {
                title: "الاستدامة",
                desc: "بناء تأثير طويل الأمد يستمر ويتطور عبر الأجيال.",
              },
            ].map((value, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-primary/30"
              >
                <h3 className="heading mb-3 text-xl font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <CtaSection />
    </main>
  );
}
