// app/businessname/layout.js
export default function BusinessLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
           
          {children}
        </div>
      </body>
    </html>
  );
}