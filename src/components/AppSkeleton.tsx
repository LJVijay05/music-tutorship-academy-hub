import { memo } from 'react';

export const AppSkeleton = memo(() => (
  <div className="min-h-screen bg-white">
    {/* Navigation Skeleton */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="hidden md:flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </nav>

    {/* Hero Skeleton */}
    <div className="pt-16 pb-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <div className="h-12 w-96 mx-auto bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-80 mx-auto bg-gray-200 rounded animate-pulse"></div>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Content Skeleton */}
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

AppSkeleton.displayName = 'AppSkeleton';