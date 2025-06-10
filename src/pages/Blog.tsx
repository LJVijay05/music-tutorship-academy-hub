
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import BlogCard from "@/components/BlogCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { blogPosts, categories } from "@/data/blogData";

const Blog = () => {
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Show newsletter popup after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('blog-newsletter-popup-seen');
      if (!hasSeenPopup) {
        setShowNewsletterPopup(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseNewsletterPopup = () => {
    setShowNewsletterPopup(false);
    localStorage.setItem('blog-newsletter-popup-seen', 'true');
  };

  // Filter blogs based on active category
  const filteredBlogPosts = useMemo(() => {
    return activeCategory === "All" 
      ? blogPosts 
      : blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  // Get visible posts based on current count
  const visiblePosts = useMemo(() => {
    return filteredBlogPosts.slice(0, visibleCount);
  }, [filteredBlogPosts, visibleCount]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset to 6 when changing category
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const hasMorePosts = visibleCount < filteredBlogPosts.length;

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
            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
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
                  {visiblePosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>
                
                {/* Load More Section */}
                {hasMorePosts && (
                  <div className="text-center mt-12 lg:mt-16 animate-bounce-up" style={{ animationDelay: '800ms' }}>
                    <Button 
                      onClick={handleLoadMore}
                      size="lg"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-professional-glow"
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
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

      <NewsletterPopup 
        isOpen={showNewsletterPopup} 
        onClose={handleCloseNewsletterPopup}
      />
    </div>
  );
};

export default Blog;
