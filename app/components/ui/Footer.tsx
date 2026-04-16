 import {  Music, Mic } from "lucide-react";
 
// ─── Section 1: Newsletter Footer ───────────────────────────────────────────
export default function Footer() {
  return (
    <footer
      className="bg-[#111] text-white px-8 py-16 md:py-20 mt-30"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Right: Logo + Nav */}
        <div className="text-right">
          <h1 className="text-6xl md:text-7xl font-black heading mb-8">البوصلة</h1>
          <nav className="flex flex-col gap-3 text-lg">
            {["الصفحة الرئيسية", "من نحن", "البودكاست", "صناع المحتوى", "تواصل معنا"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
        {/* Left: Newsletter */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            اشترك في نشرتنا البريدية
          </h2>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            انضم الآن إلى نشرتنا البريدية ليصلك أسبوعيًا محتوى حصري وأحدث
            الحلقات التي ننشرها، بالإضافة إلى فعاليات وأخبار صوت.
          </p>
 
          {/* Email Input */}
          <div className="flex items-center gap-3 mb-10">
            <div className="flex-1">
              <label className="block text-xs text-gray-400 mb-1 text-right">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="ضع بريدك الإلكتروني"
                className="w-full bg-[#2a2a2a] text-white placeholder-gray-500 px-4 py-3 rounded-none text-sm text-right border-none outline-none"
              />
            </div>
            <button className="bg-white text-black font-bold px-8 py-3 mt-5 text-sm hover:bg-gray-200 transition-colors rounded-none">
              إرسال
            </button>
          </div>
 
          {/* Social Icons */}
          <div className="flex gap-4 flex-row-reverse">
            {[
              { Icon: Music },
              { Icon: Mic },
            ].map(({ Icon }, i) => (
              <button
                key={i}
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                <Icon size={16} className="text-white" />
              </button>
            ))}
          </div>
        </div>
 
      </div>
 
      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2" dir="rtl">
        <span>جميع الحقوق محفوظة</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">سياسة الخصوصية</a>
          <a href="#" className="hover:text-gray-300 transition-colors">شروط الاستخدام</a>
        </div>
      </div>
    </footer>
  );
}