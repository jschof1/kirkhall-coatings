import { cn } from "@/lib/utils";
import yellLogo from "@/assets/icons/yell-logo.png";

interface YellIconProps {
  className?: string;
}

const YellIcon = ({ className }: YellIconProps) => {
  return (
    <img
      src={yellLogo}
      alt="Yell.com"
      className={cn("w-5 h-5 rounded-sm", className)}
    />
  );
};

export default YellIcon;
