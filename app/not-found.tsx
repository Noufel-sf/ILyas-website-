import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-6 py-16">
      <section className="w-full rounded-2xl border border-slate-200 bg-white/90 p-8 text-center shadow-sm md:p-12">
        <p className="mb-2 text-sm font-semibold tracking-wide text-slate-500">404</p>
        <h1 className="heading mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
          المسار الذي تحاول الوصول إليه غير صحيح أو تم نقله. يمكنك العودة إلى
          الصفحة الرئيسية أو التوجّه إلى صفحة التواصل.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/"
            className="btn-gradient inline-flex min-w-40 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors"
          >
            العودة للرئيسية
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-w-40 bg-slate-100 items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
          >
            صفحة التواصل
          </Link>
        </div>
      </section>
    </main>
  );
}
