"use client";

import axios from "axios";
import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/send-email", {
        data: {
          name,
          email,
          text,
          phone,
        },
      });

      alert("письмо отправленно");
    } catch (e: any) {
      console.log(e.message);
      alert("Не удалось отправить письмо");
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Cвязаться с нами
              </h2>

              <p className="mb-12 text-base font-medium text-body-color">
                Хотите связаться с нами или задать вопрос? Оставьте свои
                контакты и мы обязательно ответим!
              </p>
              <form onSubmit={submitHandler}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Ваше имя
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        E-mail
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder="Ваша электронная почта"
                        className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="mb-8 w-full px-4">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Телефоне
                    </label>
                    <input
                      required
                      type="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      placeholder="+ 7 (___)___-__-__"
                      className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Сообщение
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        value={text}
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                        placeholder="Ваше сообщение"
                        className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Отправить
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
