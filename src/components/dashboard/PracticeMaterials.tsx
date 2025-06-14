import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Play, File, Music, Headphones } from 'lucide-react';

export const PracticeMaterials = () => {
  const materials = [
    {
      id: 1,
      title: 'Logic Pro X Trap Template Pack',
      type: 'Logic Pro Project',
      size: '850 MB',
      downloads: 2340,
      category: 'Logic Pro X',
      icon: Music,
      gradient: 'from-red-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Ableton Live 12 Hip-Hop Session',
      type: 'Ableton Project',
      size: '1.2 GB',
      downloads: 1890,
      category: 'Ableton Live',
      icon: File,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Professional Vocal Chain Presets',
      type: 'Plugin Presets',
      size: '15 MB',
      downloads: 3650,
      category: 'Processing',
      icon: Headphones,
      gradient: 'from-red-500 to-purple-600',
    },
    {
      id: 4,
      title: 'Logic Pro X Mixing Masterclass Files',
      type: 'Logic Session',
      size: '2.1 GB',
      downloads: 1100,
      category: 'Mixing',
      icon: Play,
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="w-5 h-5" />
          DAW Templates & Production Resources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {materials.map((material) => (
            <div key={material.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${material.gradient} rounded-lg flex items-center justify-center shadow-md`}>
                  <material.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{material.title}</h3>
                  <p className="text-sm text-gray-600">{material.type}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                <span>{material.size}</span>
                <span>•</span>
                <span>{material.downloads.toLocaleString()} downloads</span>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {material.category}
                </Badge>
                <Button size="sm" className={`bg-gradient-to-r ${material.gradient} hover:opacity-90 text-white`}>
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-purple-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-gray-900 mb-2">🎵 DAW Pro Tip of the Day</h4>
          <p className="text-sm text-gray-700 mb-3">
            In Logic Pro X, use the Sculpture plugin to create unique textures and layers. In Ableton Live 12, experiment with the new Meld device for creative sound morphing.
          </p>
          <Button size="sm" variant="outline" className="text-xs border-red-300 text-red-700 hover:bg-red-50">
            View More Tips
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
