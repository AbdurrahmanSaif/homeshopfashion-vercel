import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home - Homeshop Fashion",
  description: "Discover the latest trends in women's fashion at HomeShop Fashion! Explore our wide selection of leggings, kurtis, and ladies wear designed for style and comfort. Shop now for trendy outfits that elevate your wardrobe. Quality fashion, unbeatable prices. Try now!",
  keywords: ["fashion", "women's fashion", "leggings", "kurtis", "ladies wear"],
  author: "Homeshop Fashion",
  openGraph: {
    title: "Home - Homeshop Fashion",
    description: "Discover the latest trends in women's fashion at HomeShop Fashion! Explore our wide selection of leggings, kurtis, and ladies wear designed for style and comfort. Shop now for trendy outfits that elevate your wardrobe. Quality fashion, unbeatable prices. Try now!",
    url: "https://homeshopfashion.com",
    siteName: "Homeshop Fashion",
    images: [
      {
        url: "https://homeshopfashion.com/backend/data/assets/1698481762-hs-meta-logo.jpg",
        width: 400,
        height: 400,
        alt: "Homeshop Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@homeshopfashion",
    title: "Home - Homeshop Fashion",
    description: "Discover the latest trends in women's fashion at HomeShop Fashion! Explore our wide selection of leggings, kurtis, and ladies wear designed for style and comfort. Shop now for trendy outfits that elevate your wardrobe. Quality fashion, unbeatable prices. Try now!",
    images: [
      {
        url: "https://homeshopfashion.com/backend/data/assets/1698481762-hs-meta-logo.jpg",
        width: 400,
        height: 400,
        alt: "Homeshop Fashion",
      },
    ],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
