"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HamburgerIcon, logo } from "@/assets";
import { isAdmin } from "@/utils";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  const navbars = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "Form",
      path: "/form",
    },
    ...(isAdmin
      ? [
          {
            link: "Tracking",
            path: "/",
          },
        ]
      : []),
  ];
  return (
    <nav className={styles.flex}>
      <div>
        <Link href="/">
          <Image
            src={logo}
            height={50}
            width={80}
            alt="Nav Logo"
            className={styles.Image}
          />
        </Link>
      </div>

      <div className={styles.menuIcon} onClick={() => setMenu(!menu)}>
        <HamburgerIcon />
      </div>

      {menu ? (
        <div className={styles.overlay}>
          {navbars.map((navbar) => (
            <Link
              key={navbar.link}
              href={navbar.path}
              className={menu && `${styles.mobilelink}`}>
              {navbar.link}
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.navListFlex}>
          {navbars.map((navbar) => (
            <Link
              key={navbar.link}
              href={navbar.path}
              className={menu ? `${styles.mobilelink}` : `${styles.link}`}>
              {navbar.link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
