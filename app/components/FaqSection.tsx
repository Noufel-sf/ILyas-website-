import AccordionItem, { type FAQItem } from "./AcordionItem";

const faqs: FAQItem[] = [
  {
    "id": "1",
    "question": "لمن صُمم مشروع البوصلة؟",
    "answer": "صُمم المشروع للشباب الجزائري الطموح الراغب في تطوير معارفه في المجال السياسي والمدني."
  },
  {
    "id": "2",
    "question": "ما المحاور التي يغطيها البرنامج؟",
    "answer": "يغطي البرنامج مسارات مهارية، قانونية، إدارية، وسياسية، مع تدريبات تطبيقية تساعدك على القيادة وتحمل المسؤولية."
  },
  {
    "id": "3",
    "question": "هل التسجيل مجاني؟",
    "answer": "نعم، التسجيل مجاني بالكامل."
  },
  {
    "id": "4",
    "question": "هل يحصل المشاركون على شهادة؟",
    "answer": "نعم، يحصل المشاركون على شهادة توثق اكتسابهم للمهارات الأساسية."
  },
  {
    "id": "5",
    "question": "هل التسجيل مفتوح للجميع؟",
    "answer": "نعم، يمكن لأي شاب أو شابة يتراوح عمره بين 18 و45 سنة التسجيل."
  },
  {
    "id": "6",
    "question": "ما الجهات الداعمة للمشروع؟",
    "answer": "تم اختيار مشروع البوصلة ضمن برنامج DZ Young Leaders التابع لوزارة الشباب، وبالتنسيق مع المجلس الأعلى للشباب."
  },
  {
    "id": "7",
    "question": "كيف يمكنني الانضمام؟",
    "answer": "يمكنك الانضمام من خلال ملء استمارة التسجيل عند فتحها، وسيتم التواصل معك لتأكيد القبول والخطوات التالية."
  }
]

export default function FaqSection() {
  return (
    <section id="faq" dir="rtl" className="w-full px-4 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl  p-6 sm:p-10">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <p className="rounded-full  heading px-4 py-2 text-sm font-semibold bg-secondary/10 text-primary">
            الأسئلة الشائعة
          </p>
          <h2 className="heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            كل ما تحتاج معرفته قبل
            <span className="marker-underline text-primary heading"> الانطلاق معنا</span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            إجابات واضحة تساعدك على فهم مسار مشروع البوصلة وكيفية الاستفادة من
            التكوينات السياسية والقيادية.
          </p>
          <div className="mt-1 h-px w-14 bg-primary" />
        </div>

        {/* Accordion list */}
        <div className="overflow-hidden rounded-2xl border border-primary/15 bg-white/70">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} item={faq} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-center text-sm leading-relaxed text-slate-500">
          لديك سؤال آخر؟{" "}
          <a
            href="/contact"
            className="text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            تواصل معنا مباشرة
          </a>
          .
        </p>
      </div>
    </section>
  );
}