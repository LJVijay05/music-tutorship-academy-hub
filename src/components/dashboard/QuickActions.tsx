
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Download, Upload, Headphones, Settings, Mic, Music } from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    { 
      icon: Calendar, 
      label: 'Schedule Session', 
      color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
      description: 'Book mentorship'
    },
    { 
      icon: Download, 
      label: 'Logic Pro Templates', 
      color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
      description: 'Download projects'
    },
    { 
      icon: Music, 
      label: 'Ableton Live Files', 
      color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
      description: 'Live 12 sessions'
    },
    { 
      icon: Upload, 
      label: 'Submit Track', 
      color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
      description: 'Get feedback'
    },
    { 
      icon: Headphones, 
      label: 'Sample Library', 
      color: 'text-blue-600 bg-blue-50 hover:bg-blue-100',
      description: 'Browse sounds'
    },
    { 
      icon: Mic, 
      label: 'Live Chat', 
      color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
      description: 'Connect mentor'
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          DAW Production Tools
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto p-4 flex flex-col items-center gap-2 transition-all duration-200 hover:scale-105 ${action.color}`}
            >
              <action.icon className="w-6 h-6" />
              <div className="text-center">
                <span className="text-xs font-medium block">{action.label}</span>
                <span className="text-xs opacity-75">{action.description}</span>
              </div>
            </Button>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h4 className="font-medium text-gray-900 mb-2">Today's DAW Challenge</h4>
          <p className="text-sm text-gray-600 mb-3">Create a 16-bar loop using Logic Pro X's Sculpture and Alchemy plugins</p>
          <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Start Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
