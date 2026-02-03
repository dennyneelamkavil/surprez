type Props = {
  step: number;
  total: number;
};

export default function ProgressHeader({ step, total }: Props) {
  const percent = Math.round((step / total) * 100);

  return (
    <header className="bg-primary py-6">
      <div className="max-w-md mx-auto text-center text-white">
        <p className="text-sm">
          STEP {step} OF {total}
        </p>
        <div className="mt-3 h-2 bg-white/40 rounded-full">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </header>
  );
}
