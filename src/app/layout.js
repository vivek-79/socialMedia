
'use client'
import Setting from "@/comps/setting";
import localFont from "next/font/local";
import store from "@/redux/store";
import "./globals.css";
import { Provider} from "react-redux";

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

export default function RootLayout({ children }) {

  return (
    <html lang="en">
       <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className='layout'>
        <Provider store={store}>
            {children}
            <Setting/>
        </Provider>
      </body>
    </html>
  );
}
