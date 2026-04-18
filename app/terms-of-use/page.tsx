export default function TermsOfUsePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
      <h1 className="heading mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
        شروط  <span className="text-primary heading marker-underline">الاستخدام</span>
      </h1>
      <div className="space-y-6 text-right text-slate-700 leading-8">
        <p>
          باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام المعمول
          بها في مشروع البوصلة.
        </p>
        <p>
          يُمنع استخدام المحتوى المنشور لأي أغراض غير قانونية أو بطريقة قد تضر
          بالمشروع أو بالمستخدمين الآخرين.
        </p>
        <p>
          نحتفظ بحق تحديث هذه الشروط عند الحاجة، ويُعد استمرارك في استخدام الموقع
          موافقةً على التعديلات الجديدة.
        </p>
      </div>
    </main>
  );
}
