export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#225c49]" />
      <p className="text-sm font-medium text-slate-500">Loading friends...</p>
    </div>
  );
}