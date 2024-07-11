
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
        
        <div className="p-2 border-2 border-gray-950  text-center ">
            Sign up now to get 20% off on your first purchase  
        </div>
        {children}
    </div>
  );
}
