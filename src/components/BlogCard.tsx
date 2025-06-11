
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const formatDate = (date: string) => new Date(date).toLocaleDateString();
  
  const metadata = [
    { icon: User, value: post.author },
    { icon: Calendar, value: formatDate(post.date) },
    { icon: Clock, value: post.readTime }
  ];

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg rounded-2xl overflow-hidden bg-white animate-stagger-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-video bg-gradient-to-br from-red-100 to-gray-100 relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-twinkle">
            {post.category}
          </span>
        </div>
      </div>
      
      <CardHeader className="p-4 lg:p-6">
        <CardTitle className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6 space-y-6">
        <p className="text-gray-600 line-clamp-3 leading-relaxed text-sm lg:text-base">
          {post.excerpt}
        </p>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs lg:text-sm text-gray-500 gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            {metadata.slice(0, 2).map(({ icon: Icon, value }, i) => (
              <div key={i} className="flex items-center gap-1">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-red-600 hover:bg-red-700 text-white group/btn relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 rounded-xl"
          asChild
        >
          <Link to={`/blog/${post.id}`} className="flex items-center justify-center">
            <span className="relative z-10 text-sm lg:text-base">Read More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
