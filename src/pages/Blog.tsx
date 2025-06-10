
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Blog = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Show newsletter popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen the popup (localStorage check)
      const hasSeenPopup = localStorage.getItem('blog-newsletter-popup-seen');
      if (!hasSeenPopup) {
        setShowNewsletterPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNewsletterPopup = () => {
    setShowNewsletterPopup(false);
    // Mark popup as seen so it doesn't show again
    localStorage.setItem('blog-newsletter-popup-seen', 'true');
  };

  // Extended blog posts data with 12 posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Music Production: A Beginner's Guide",
      excerpt: "Learn the fundamentals of music production and discover the essential tools you need to start creating your own tracks.",
      author: "Music Tutorship Team",
      date: "2024-06-01",
      readTime: "8 min read",
      category: "Beginner Guide",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Top 10 DAW Software for Music Production in 2024",
      excerpt: "Explore the best Digital Audio Workstations available today and find the perfect one for your music production needs.",
      author: "Music Tutorship Team",
      date: "2024-05-28",
      readTime: "12 min read",
      category: "Software Review",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Understanding Audio Mixing: Tips from Professional Producers",
      excerpt: "Master the art of audio mixing with proven techniques and tips from industry professionals.",
      author: "Music Tutorship Team",
      date: "2024-05-25",
      readTime: "15 min read",
      category: "Advanced Tutorial",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Building Your Home Studio on a Budget",
      excerpt: "Create a professional-quality home studio without breaking the bank. Learn about essential equipment and smart purchasing decisions.",
      author: "Music Tutorship Team",
      date: "2024-05-22",
      readTime: "10 min read",
      category: "Studio Setup",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "The Psychology of Sound: How Music Affects Our Emotions",
      excerpt: "Discover the science behind how different sounds and musical elements influence human emotions and behavior.",
      author: "Music Tutorship Team",
      date: "2024-05-20",
      readTime: "7 min read",
      category: "Music Theory",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Collaboration in Music Production: Working with Other Artists",
      excerpt: "Learn effective strategies for collaborating with other musicians and producers to create amazing music together.",
      author: "Music Tutorship Team",
      date: "2024-05-18",
      readTime: "9 min read",
      category: "Collaboration",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Essential Studio Equipment for Beginners",
      excerpt: "A comprehensive guide to the must-have equipment for setting up your first music production studio.",
      author: "Music Tutorship Team",
      date: "2024-05-15",
      readTime: "11 min read",
      category: "Studio Setup",
      image: "/placeholder.svg"
    },
    {
      id: 8,
      title: "Mastering EQ: The Complete Guide",
      excerpt: "Deep dive into equalization techniques and learn how to shape your sound with precision and creativity.",
      author: "Music Tutorship Team",
      date: "2024-05-12",
      readTime: "14 min read",
      category: "Advanced Tutorial",
      image: "/placeholder.svg"
    },
    {
      id: 9,
      title: "Music Theory Fundamentals Every Producer Should Know",
      excerpt: "Essential music theory concepts that will enhance your production skills and musical understanding.",
      author: "Music Tutorship Team",
      date: "2024-05-10",
      readTime: "13 min read",
      category: "Music Theory",
      image: "/placeholder.svg"
    },
    {
      id: 10,
      title: "Your First Beat: Step-by-Step Tutorial",
      excerpt: "Follow along as we create your first beat from scratch, covering rhythm, melody, and arrangement basics.",
      author: "Music Tutorship Team",
      date: "2024-05-08",
      readTime: "16 min read",
      category: "Beginner Guide",
      image: "/placeholder.svg"
    },
    {
      id: 11,
      title: "Acoustic Treatment for Your Studio Space",
      excerpt: "Learn how to optimize your room acoustics for better monitoring and recording without spending a fortune.",
      author: "Music Tutorship Team",
      date: "2024-05-05",
      readTime: "12 min read",
      category: "Studio Setup",
      image: "/placeholder.svg"
    },
    {
      id: 12,
      title: "Remote Collaboration Tools for Musicians",
      excerpt: "Discover the best tools and platforms for collaborating with musicians and producers around the world.",
      author: "Music Tutorship Team",
      date: "2024-05-03",
      readTime: "8 min read",
      category: "Collaboration",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Beginner Guide", "Software Review", "Advanced Tutorial", "Studio Setup", "Music Theory", "Collaboration"];

  // Filter blogs based on active category
  const filteredBlogPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-red-50 to-gray-50 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-bounce">
              Music Production <span className="text-red-600">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-glow-reveal" style={{ animationDelay: '200ms' }}>
              Insights, tutorials, and industry news to help you master music production
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 animate-fade-up-slow" style={{ animationDelay: '400ms' }}>
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={category === activeCategory ? "default" : "outline"}
                  onClick={() => handleCategoryClick(category)}
                  className={`${
                    category === activeCategory 
                      ? "bg-red-600 hover:bg-red-700 text-white animate-professional-glow" 
                      : "border-gray-300 hover:border-red-600 hover:text-red-600 hover:bg-red-50"
                  } transition-all duration-300 rounded-full px-4 py-2 text-sm md:text-base hover:shadow-md hover:-translate-y-0.5 cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            {filteredBlogPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No blog posts found for this category.</p>
              </div>
            ) : (
              <>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
                  {filteredBlogPosts.map((post, index) => (
                    <Card 
                      key={post.id} 
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
                      
                      <CardContent className="px-4 lg:px-6 pb-4 lg:pb-6">
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-sm lg:text-base">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs lg:text-sm text-gray-500 mb-6 gap-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
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
                            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* Load More Section - Only show if there are filtered results */}
                <div className="text-center mt-12 lg:mt-16 animate-bounce-up" style={{ animationDelay: '800ms' }}>
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-professional-glow"
                  >
                    Load More Articles
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-r from-red-600 to-red-700 animate-slide-up" style={{ animationDelay: '1000ms' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated with Latest Tips
            </h2>
            <p className="text-red-100 text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly music production insights and exclusive content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none text-sm lg:text-base"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm lg:text-base whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Newsletter Popup */}
      <NewsletterPopup 
        isOpen={showNewsletterPopup} 
        onClose={handleCloseNewsletterPopup}
      />
    </div>
  );
};

export default Blog;
