
import { cn } from "@/lib/utils";

interface ParameterScoreProps {
  label: string;
  score: number;
  maxScore: number;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export const ParameterScore = ({
  label,
  score,
  maxScore,
  size = "sm",
  inverted = false
}: ParameterScoreProps) => {
  const percentage = (score / maxScore) * 100;
  
  // Handle inverted scores (like risk meter where lower is better)
  const displayPercentage = inverted ? 100 - percentage : percentage;
  const displayScore = inverted ? maxScore - score : score;

  const getBarColor = (percent: number) => {
    if (percent >= 80) return "bg-green-500";
    if (percent >= 60) return "bg-lime-500";
    if (percent >= 40) return "bg-yellow-500";
    if (percent >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className={cn(
          "text-sm font-medium",
          size === "md" && "text-base",
          size === "lg" && "text-lg"
        )}>
          {label}
        </span>
        <span className={cn(
          "text-xs font-semibold",
          size === "md" && "text-sm",
          size === "lg" && "text-base"
        )}>
          {displayScore}/{maxScore}
        </span>
      </div>
      <div className="ipo-parameter-value">
        <div
          className={cn("ipo-parameter-value-bar", getBarColor(displayPercentage))}
          style={{ width: `${displayPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
