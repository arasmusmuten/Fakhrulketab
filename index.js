import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="gold-text">فخرالکتاب</h1>
        <nav className="nav-links">
          <a href="#">صفحه اصلی</a>
          <a href="#">کتاب‌ها</a>
          <a href="#">دوره‌ها</a>
          <a href="#">ورود / ثبت‌نام</a>
        </nav>
      </header>

      <section className="hero">
        <h2 className="gold-text">مرجع رسمی کتاب‌های تخصصی و آموزشی</h2>
        <p>بهترین منابع آموزشی برای یادگیری و پیشرفت شما</p>
        <button className="button">مشاهده کتاب‌ها</button>
      </section>

      <section className="cards">
        <div className="card">
          <h3 className="gold-text">کتاب‌های جدید</h3>
          <p>جدیدترین کتاب‌های منتشر شده را مشاهده کنید</p>
        </div>
        <div className="card">
          <h3 className="gold-text">دوره‌های آموزشی</h3>
          <p>بهترین دوره‌های تخصصی برای یادگیری</p>
        </div>
        <div className="card">
          <h3 className="gold-text">عضویت در سایت</h3>
          <p>ثبت‌نام کنید و به محتوای اختصاصی دسترسی داشته باشید</p>
        </div>
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
