"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Prevoz Mini Bus
                </Link>
              </li>

              <li>
                <Link
                  href="/taxi"
                  className="text-muted-foreground hover:text-primary"
                >
                  Mega Taxi Pozega
                </Link>
              </li>

              <li>
                <Link
                  href="/kontakt"
                  className="text-muted-foreground hover:text-primary"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0">
            <div>
              {" "}
              <a href="tel:+381646103788">
                <p className="text-muted-foreground">
                  Telefon: +38164 610 3788
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:megataxipozega@gmail.com">
                <p className="text-muted-foreground text-wrap">
                  Email: megataxipozega@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/citroentaxi.pozega/?locale=sr_RS"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/mega.taxi.pozega/?hl=en"
                target={"_blank"}
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center text-primary">
            <h3 className="text-lg font-semibold mb-2 md:mb-4">Autoring</h3>

            <p className=" font-bold ">
              Kombi prevoz putnika, Minibus prevoz, Autobuski prevoz...vi
              birate!
            </p>
          </div>
        </div>

        <div className="mt-5 pt-5 md:mt-8 md:pt-8 flex flex-col md:flex-row justify-center gap-2 md:gap-10 border-t border-primary ">
          <p>&copy; 2025 Autoring. Sva prava zadržana.</p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            Izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
