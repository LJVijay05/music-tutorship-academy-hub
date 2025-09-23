import { LucideIcon } from "lucide-react";

interface CourseStatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  isPremium?: boolean;
}

const CourseStatsCard = ({ icon: Icon, value, label, isPremium = false }: CourseStatsCardProps) => {
  const cardStyles = isPremium ? 'bg-amber-50 border-amber-100' : 'bg-red-50 border-red-100';
  const iconStyles = isPremium ? 'text-amber-600' : 'text-red-600';

  return (
    <div className={`flex items-center justify-center gap-3 ${cardStyles} backdrop-blur-sm rounded-xl p-4 border shadow-sm hover:shadow-md transition-all duration-300`}>
      <Icon className={`w-5 h-5 ${iconStyles}`} />
      <div className="text-left">
        <p className="font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default CourseStatsCard;