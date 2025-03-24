import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <header className="flex justify-between items-center py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold text-gold-400">فخرالکتاب</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gold-300">صفحه اصلی</a></li>
            <li><a href="#" className="hover:text-gold-300">کتاب‌ها</a></li>
            <li><a href="#" className="hover:text-gold-300">دوره‌ها</a></li>
            <li><a href="#" className="hover:text-gold-300">ورود / ثبت‌نام</a></li>
          </ul>
        </nav>
      </header>

      <main className="text-center py-20">
        <motion.h2 
          className="text-5xl font-extrabold text-gold-300 mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          مرجع رسمی کتاب‌های تخصصی و آموزشی
        </motion.h2>
        <p className="text-lg text-gray-400 mb-6">بهترین منابع آموزشی برای یادگیری و پیشرفت شما</p>
        <Button className="bg-gold-500 text-black px-6 py-3 rounded-xl text-lg hover:bg-gold-400">مشاهده کتاب‌ها</Button>
      </main>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-bold text-gold-300">کتاب‌های جدید</h3>
            <p className="text-gray-400 text-sm">جدیدترین کتاب‌های منتشر شده را مشاهده کنید</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-bold text-gold-300">دوره‌های آموزشی</h3>
            <p className="text-gray-400 text-sm">بهترین دوره‌های تخصصی برای یادگیری</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <h3 className="text-xl font-bold text-gold-300">عضویت در سایت</h3>
            <p className="text-gray-400 text-sm">حساب کاربری خود را ایجاد کنید و به محتوای اختصاصی دسترسی داشته باشید</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
