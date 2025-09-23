import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, LucideIcon } from "lucide-react";

interface CourseModule {
  week: string;
  title: string;
  icon: LucideIcon;
  topics: string[];
}

interface CourseModuleCardProps {
  module: CourseModule;
  index: number;
  isPremium?: boolean;
}

const CourseModuleCard = ({ module, index, isPremium = false }: CourseModuleCardProps) => {
  const headerStyles = isPremium 
    ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-100' 
    : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-100';
  
  const badgeStyles = isPremium ? 'bg-amber-600' : 'bg-red-600';
  const weekStyles = isPremium ? 'text-amber-600' : 'text-red-600';
  const iconStyles = isPremium ? 'text-amber-600' : 'text-red-600';
  const checkStyles = isPremium ? 'text-amber-600' : 'text-green-600';

  return (
    <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all duration-300">
      <CardHeader className={`${headerStyles} rounded-t-lg border-b`}>
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className={`w-8 h-8 ${badgeStyles} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
            {index + 1}
          </div>
          <div className="flex items-center gap-3 flex-1">
            <span className={`${weekStyles} text-sm font-medium`}>{module.week}</span>
            <h3 className="text-gray-900">{module.title}</h3>
          </div>
          {module.icon && <module.icon className={`w-5 h-5 ${iconStyles}`} />}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {module.topics.map((topic, topicIndex) => (
            <li key={topicIndex} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <CheckCircle className={`w-4 h-4 ${checkStyles} flex-shrink-0 mt-0.5`} />
              <span className="text-gray-700 text-sm">{topic}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CourseModuleCard;