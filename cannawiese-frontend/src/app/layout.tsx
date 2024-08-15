import "@/styles/bootstrap.scss";
import type {Metadata} from 'next'
import {Montserrat, Open_Sans} from 'next/font/google'
import Script from "next/script";
import {Navigation} from "@/src/components/Navigation/Navigation";
import Footer from "@/src/components/Footer/Footer";
import Link from "next/link";
import React from "react";

const montserrat = Montserrat({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

const openSans = Open_Sans({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-openSans',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Cannawiese',
    description: 'Cannawiese',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de" className={`${montserrat.variable} ${openSans.variable} h-100`}>
        <body className={`h-100`}>
            {children}
        </body>
        </html>
    )
}
