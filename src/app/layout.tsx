import { FC, PropsWithChildren } from "react";
import "../components/ui/globals.css"; // Import global styles

const RootLayout: FC <PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Dashboard YerbaXanaes</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;