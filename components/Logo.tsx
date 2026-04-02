export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2L4 8v8c0 7.73 5.12 14.96 12 16.8C22.88 30.96 28 23.73 28 16V8L16 2z"
          fill="#2563EB"
        />
        <path
          d="M18 10l-5 7h4l-1 5 5-7h-4l1-5z"
          fill="white"
        />
      </svg>
      <span className="text-xl font-bold text-text-primary">SubGuard</span>
    </div>
  );
}

export function LogoDark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2L4 8v8c0 7.73 5.12 14.96 12 16.8C22.88 30.96 28 23.73 28 16V8L16 2z"
          fill="#2563EB"
        />
        <path
          d="M18 10l-5 7h4l-1 5 5-7h-4l1-5z"
          fill="white"
        />
      </svg>
      <span className="text-xl font-bold text-white">SubGuard</span>
    </div>
  );
}
