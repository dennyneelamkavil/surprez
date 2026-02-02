'use client'

interface ProgressIndicatorProps {
  step: 1 | 2
  totalSteps?: number
}

export default function ProgressIndicator({
  step,
  totalSteps = 2,
}: ProgressIndicatorProps) {
  const percentage = (step / totalSteps) * 100

  return (
    <div className="w-full bg-muted py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-secondary">
            STEP OF {step} OF {totalSteps}
          </h2>
          <span className="text-sm font-semibold text-secondary">
            {Math.round(percentage)}%
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
