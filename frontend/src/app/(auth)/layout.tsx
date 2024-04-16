export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200 ">
      <div className="absolute">
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 top-0 -left-4 bg-green-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 top-0 -right-4 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000 delay-1000"></div>
        <div className="absolute md:h-72 sm:h-60 md:w-72 sm:w-60 -bottom-8 -left-10 bg-yellow-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      {children}
    </div>
  );
}
