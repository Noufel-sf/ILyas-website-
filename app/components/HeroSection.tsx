import React from "react";

export default function HeroSection() {
	return (
		<section
			dir="rtl"
			className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-24"
		>
			<div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_25%,rgba(10,153,0,0.12),transparent_36%),radial-gradient(circle_at_80%_10%,rgba(224,47,117,0.14),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]" />

			<div className="pointer-events-none absolute inset-x-0 top-10 -z-10 flex justify-between px-2 sm:px-8">
				<div className="hidden h-28 w-28 rounded-4xl bg-(image:--gradient-primary) p-0.5 shadow-lg md:block">
					<div className="flex h-full w-full items-center justify-center rounded-[1.9rem] bg-white text-sm font-bold text-green">
						المدن
						<br />
						العربية
					</div>
				</div>
				<div className="hidden h-28 w-28 rounded-4xl bg-(image:--gradient-primary) p-0.5 shadow-lg md:block">
					<div className="flex h-full w-full items-center justify-center rounded-[1.9rem] bg-white text-sm font-bold text-green">
						قيادة
						<br />
						شبابية
					</div>
				</div>
			</div>

			<span className="pointer-events-none absolute right-[14%] top-16 text-2xl text-yellow-500">✦</span>
			<span className="pointer-events-none absolute left-[15%] top-28 text-xl text-pink-400">✦</span>
			<span className="pointer-events-none absolute right-[22%] top-52 text-sm text-violet-500">●</span>
			<span className="pointer-events-none absolute left-[22%] top-60 text-sm text-indigo-500">●</span>

			<div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
				<span className="inline-flex items-center rounded-2xl bg-green/15 px-6 py-2 text-sm font-bold text-green sm:text-lg">
					أكثر من 390 زائر
				</span>

				<h1 className="mt-7 max-w-4xl text-3xl font-extrabold leading-tight text-green sm:text-5xl">
					هل أنت مستعد لتقود التغيير وتُشارك في صناعة القرار؟
				</h1>

				<p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-2xl">
					مشروع البوصلة مبادرة شبابية تكوينية لتأهيل وتمكين الشباب في المجال
					السياسي عبر مسارات مهارية، قانونية، إدارية وسياسية.
				</p>

				<p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-xl">
					نسعى إلى إعداد جيل واعٍ يفهم آليات العمل المؤسساتي ويشارك بفعالية في
					الحياة العامة، من خلال تكوينات تطبيقية تعزز الكفاءة والقيادة
					والمسؤولية.
				</p>

				<a
					href="#about"
					className="mt-10 inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-green px-8 text-xl font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-green/90"
				>
					اكتشف الآن ✧
				</a>

				<p className="mt-12 max-w-4xl text-2xl font-extrabold leading-relaxed text-green sm:text-4xl">
					انضم وتطوع مع فريقنا في البحث والتطوير،
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
