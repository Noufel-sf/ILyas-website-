 import Link from "next/link";

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
            {[
              { label: "الصفحة الرئيسية", href: "/" },
              { label: "من نحن", href: "/about" },
              { label: "تواصل معنا", href: "/contact" },
            ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>
        {/* Left: Newsletter */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl heading font-black mb-4 leading-tight">
            انضم في مشروع البوصلة
          </h2>
          <p className="text-gray-400 text-sm mb-8  leading-relaxed">
            انضم في مشروع البوصلة لتستلم أحدث الحلقات والأخبار.
          </p>
 
       
 
          {/* Social Icons */}
          <div className="flex gap-4 flex-row-reverse">
            {[
              {
                href: "https://instagram.com/elbawsala.dz",
                label: "Instagram",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-white">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                  </svg>
                ),
              },
              {
                href: "https://facebook.com/elbawsala",
                label: "Facebook",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                ),
              },
              {
                href: "https://wa.me/+213540355191",
                label: "WhatsApp",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.862L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.034-1.388l-.361-.214-3.741.981.998-3.648-.235-.374A9.818 9.818 0 1112 21.818z" />
                  </svg>
                ),
              },
              // {
              //   href: "https://t.me/elbawsala_dz",
              //   label: "Telegram",
              //   icon: (
              //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
              //       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 14.4l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.888.16z" />
              //     </svg>
              //   ),
              // },
            ].map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 border border-gray-600 flex items-center justify-center hover:border-white transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
 
      </div>
 
      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2" dir="rtl">
        <span>جميع الحقوق محفوظة</span>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">سياسة الخصوصية</Link>
          <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors">شروط الاستخدام</Link>
        </div>
      </div>
    </footer>
  );
}