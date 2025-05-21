
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
    if (inverted) {
      // For inverted scales (like risk - where lower is better)
      if (percent >= 80) return "bg-ipo-red";
      if (percent >= 60) return "bg-ipo-orange";
      if (percent >= 40) return "bg-ipo-yellow";
      if (percent >= 20) return "bg-ipo-teal";
      return "bg-ipo-green";
    } else {
      // For regular scales (where higher is better)
      if (percent >= 80) return "bg-ipo-green";
      if (percent >= 60) return "bg-ipo-teal";
      if (percent >= 40) return "bg-ipo-yellow";
      if (percent >= 20) return "bg-ipo-orange";
      return "bg-ipo-red";
    }
  };

  return (
    <div className="w-full group transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-1">
        <span className={cn(
          "text-sm font-medium transition-colors group-hover:text-primary",
          size === "md" && "text-base",
          size === "lg" && "text-lg"
        )}>
          {label}
        </span>
        <span className={cn(
          "text-xs font-semibold",
          size === "md" && "text-sm",
          size === "lg" && "text-base",
          getBarColor(displayPercentage).replace('bg-', 'text-')
        )}>
          {displayScore}/{maxScore}
        </span>
      </div>
      <div className="ipo-parameter-value">
        <div
          className={cn(
            "ipo-parameter-value-bar transition-all duration-700 ease-out group-hover:opacity-90",
            getBarColor(displayPercentage)
          )}
          style={{ width: `${displayPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
