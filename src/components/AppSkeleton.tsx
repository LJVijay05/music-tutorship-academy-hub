import { memo } from 'react';

export const AppSkeleton = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50">
    {/* Navigation Skeleton */}
    <div className="h-16 bg-white/80 backdrop-blur-sm border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="h-8 w-32 bg-red-200 rounded lazy-placeholder"></div>
        <div className="hidden md:flex space-x-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-16 bg-red-200 rounded lazy-placeholder" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
        <div className="h-8 w-24 bg-red-200 rounded lazy-placeholder"></div>
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="h-12 w-3/4 bg-red-200 rounded mx-auto lazy-placeholder"></div>
        <div className="h-6 w-1/2 bg-red-200 rounded mx-auto lazy-placeholder" style={{ animationDelay: '0.2s' }}></div>
        <div className="h-10 w-40 bg-red-200 rounded mx-auto lazy-placeholder" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>

    {/* Content Sections Skeleton */}
    <div className="space-y-20 pb-20">
      {[...Array(2)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-red-200 rounded mx-auto mb-4 lazy-placeholder" style={{ animationDelay: `${sectionIndex * 0.3}s` }}></div>
            <div className="h-4 w-96 bg-red-200 rounded mx-auto lazy-placeholder" style={{ animationDelay: `${sectionIndex * 0.3 + 0.1}s` }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, cardIndex) => (
              <div key={cardIndex} className="bg-white rounded-lg p-6 space-y-4 shadow-sm">
                <div className="h-32 bg-red-200 rounded lazy-placeholder" style={{ animationDelay: `${cardIndex * 0.1}s` }}></div>
                <div className="h-6 w-3/4 bg-red-200 rounded lazy-placeholder" style={{ animationDelay: `${cardIndex * 0.1 + 0.2}s` }}></div>
                <div className="h-4 w-full bg-red-200 rounded lazy-placeholder" style={{ animationDelay: `${cardIndex * 0.1 + 0.3}s` }}></div>
                <div className="h-4 w-2/3 bg-red-200 rounded lazy-placeholder" style={{ animationDelay: `${cardIndex * 0.1 + 0.4}s` }}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
));

AppSkeleton.displayName = 'AppSkeleton';