import Image from "next/image";
import CampaignForm from "./components/CampaignForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9] text-black selection:bg-primary selection:text-white pb-20">
      {/* Premium Navigation / Logo Bar */}
      <nav className="max-w-[1400px] mx-auto px-6 flex justify-center md:justify-start items-center animate-luxury-slide">
        <div className="flex flex-col items-center md:items-start group cursor-default">
          <Image
            src="/logo.png"
            alt="AMAC Aesthetic"
            width={100}
            height={100}
            className="object-cover contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
            priority
          />
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Hero Section - Simplified and Premium */}
        <section className="mb-2 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-16">
          <div className="animate-luxury-slide">
            <h1
              suppressHydrationWarning
              className="luxury-heading text-2xl md:text-6xl lg:text-7xl xl:text-[80px] text-black"
            >
              NHẬN <span className="text-primary italic">VOUCHER</span>{" "}
              <br className="hidden md:block" />
              TỪ AMAC
            </h1>
          </div>
        </section>

        {/* Content Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start">
          {/* Left: Brand Imagery & Info */}
          <div className="lg:col-span-5 hidden lg:block animate-luxury-slide delay-300">
            <div className="relative border border-black p-2 bg-white">
              <div className="aspect-[3/4] relative overflow-hidden group">
                <Image
                  src="/hero.png"
                  alt="AMAC Aesthetic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                  priority
                />
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="h-px w-20 bg-black"></div>
              <p className="font-header text-sm font-medium tracking-tight uppercase leading-relaxed max-w-[300px]">
                Hệ sinh thái đặc quyền dành riêng cho khách hàng cao cấp của
                AMAC.
              </p>
            </div>
          </div>

          {/* Right: Conversion Form */}
          <div className="lg:col-span-7 w-full animate-luxury-slide delay-400">
            <div className="luxury-card">
              <CampaignForm />
            </div>

            {/* Terms Card - Refined */}
            <div className="mt-12 p-8 md:p-12 border border-black/5 bg-white/50 backdrop-blur-sm">
              <h3 className="font-header font-black text-[12px] mb-6 uppercase tracking-[0.3em] text-primary">
                Điều kiện áp dụng
              </h3>
              <div className="space-y-4 font-jakarta text-[11px] md:text-[12px] text-gray-500 font-bold uppercase tracking-wide">
                <div className="flex gap-4 items-start">
                  <span className="text-primary">01.</span>
                  <p>VOUCHER CÓ GIÁ TRỊ ĐẾN HẾT NĂM 2026.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-primary">02.</span>
                  <p>ÁP DỤNG CHO TẤT CẢ CÁC DỊCH VỤ THUỘC HỆ THỐNG AMAC.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-primary">03.</span>
                  <p>KHÔNG CÓ GIÁ TRỊ QUY ĐỔI THÀNH TIỀN MẶT.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="mt-20 border-t border-black/5 py-16 px-6 max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-header font-black text-lg tracking-tighter italic">
          AMAC.COLLECTIVE
        </div>
        <div className="text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase">
          © THE ART OF EXCLUSIVITY • 2026
        </div>
      </footer>
    </main>
  );
}
