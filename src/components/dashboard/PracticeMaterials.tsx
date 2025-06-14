
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Play, File, Music, Headphones } from 'lucide-react';

export const PracticeMaterials = () => {
  const materials = [
    {
      id: 1,
      title: 'Trap Sample Pack Vol. 3',
      type: 'Sample Pack',
      size: '450 MB',
      downloads: 1240,
      category: 'Drums',
      icon: Headphones,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      title: 'FL Studio Mixing Template',
      type: 'Project File',
      size: '12 MB',
      downloads: 890,
      category: 'Templates',
      icon: File,
      gradient: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Vocal Processing Presets',
      type: 'Preset Pack',
      size: '8 MB',
      downloads: 650,
      category: 'Effects',
      icon: Music,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Beat Making Tutorial Files',
      type: 'Learning Pack',
      size: '180 MB',
      downloads: 1100,
      category: 'Education',
      icon: Play,
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="w-5 h-5" />
          Practice Materials & Resources
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
        
        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <h4 className="font-medium text-gray-900 mb-2">💡 Production Tip of the Day</h4>
          <p className="text-sm text-gray-700 mb-3">
            Layer your 808s with a sub bass to create a fuller low-end. Use a sine wave tuned an octave lower than your 808.
          </p>
          <Button size="sm" variant="outline" className="text-xs">
            View More Tips
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
