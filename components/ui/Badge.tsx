export function Badge({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
}
