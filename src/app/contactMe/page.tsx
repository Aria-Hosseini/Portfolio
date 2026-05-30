import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

export default function ContactMe() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div
        className="w-full max-w-md rounded-2xl bg-[#18181B]  
          shadow-[0_8px_30px_rgba(0,188,255,0.3)] "
      >
        <div className="px-6 pt-6">
          <h1 className="text-2xl font-bold text-amber-50">ارتباط با من</h1>
          <p className="mt-2 text-sm text-gray-500">
            برای همکاری یا پرسش‌ها، از راه‌های زیر تماس بگیرید.
          </p>
        </div>

        <div className="px-6 py-6 space-y-5">
          <div className="flex items-start gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl 
              bg-[#00BCFF]/10 text-[#efefef] text-lg shadow-[0_4px_10px_rgba(0,188,255,0.4)]"
            >
              <MdOutlineAlternateEmail />
            </span>
            <div className="flex-1">
              <div className="text-sm text-gray-500">ایمیل</div>
              <a
                href="mailto:ariahosseini.dev@gmail.com"
                className="mt-0.5 inline-block text-[#00BCFF] hover:text-[#0099cc] font-medium"
              >
                ariahosseini.dev@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl 
                 bg-[#00BCFF]/10 text-[#efefef] text-lg shadow-[0_4px_10px_rgba(0,188,255,0.4)]"
            >
              <FaPhoneFlip />
            </span>
            <div className="flex-1">
              <div className="text-sm text-gray-500">تلفن</div>
              <a
                href="tel:+989915766048"
                className="mt-0.5 inline-block text-[#00BCFF] hover:text-[#0099cc] font-medium "
                dir="ltr"
              >
                +98 991 576 6048
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl 
                 bg-[#00BCFF]/10 text-[#efefef] text-lg shadow-[0_4px_10px_rgba(0,188,255,0.4)]"
            >
              <RiTelegram2Fill />
            </span>
            <div className="flex-1">
              <div className="text-sm text-gray-500">تلگرام</div>
              <a
                href="https://t.me/misty_enigma"
                className="mt-0.5 inline-block text-[#00BCFF] hover:text-[#0099cc] font-medium "
                dir="ltr"
              >
                @misty_enigma
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center px-6 pb-6 gap-4">
          <a
            href="mailto:ariahosseini.dev@gmail.com?subject=درخواست همکاری یا سوال&body= "
            className="w-full inline-flex items-center justify-center rounded-lg 
               bg-gradient-to-r from-[#00BCFF] to-[#0099cc] text-white px-4 py-3 
               text-sm font-semibold shadow-[0_4px_15px_rgba(0,188,255,0.5)] 
               hover:opacity-90 transition-all"
          >
            به من ایمیل بزنید
          </a>
          <a
            href="tel:+989915766048"
            className="w-full inline-flex items-center justify-center rounded-lg 
               bg-gradient-to-r from-[#00BCFF] to-[#0099cc] text-white px-4 py-3 
               text-sm font-semibold shadow-[0_4px_15px_rgba(0,188,255,0.5)] 
               hover:opacity-90 transition-all"
          >
            با من تماس بگیرید
          </a>
        </div>
      </div>
    </div>
  );
}
