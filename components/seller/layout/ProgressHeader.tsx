type Props = {
  step: number;
  total: number;
};

export default function ProgressHeader({ step, total }: Props) {
  const percent = Math.round((step / total) * 100);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2 text-[20px] font-semibold tracking-widest text-secondary">
        <span>
          STEP {step} OF {total}
        </span>
        <span>{percent}%</span>
      </div>
      {/* Progress Bar Track */}
      <div className="h-4 w-full bg-[#6A6A6A] rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
