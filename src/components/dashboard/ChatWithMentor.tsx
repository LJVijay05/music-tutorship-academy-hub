
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const ChatWithMentor = () => {
  console.log('ChatWithMentor component rendered');
  
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Your Mentor',
      message: 'Hi! I\'m here to help with your Logic Pro X and Ableton Live 12 journey. What are you working on today?',
      time: '10:30 AM',
      isOwn: false,
    },
    {
      id: 2,
      sender: 'You',
      message: 'I\'m having trouble with the EQ settings on my track. Can you help?',
      time: '10:35 AM',
      isOwn: true,
    },
    {
      id: 3,
      sender: 'Your Mentor',
      message: 'Absolutely! Let\'s start with the basics. Are you working in Logic Pro X or Ableton Live 12?',
      time: '10:37 AM',
      isOwn: false,
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-md h-[500px] flex flex-col p-0">
          <DialogHeader className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-b">
            <DialogTitle className="flex items-center gap-2 text-gray-800">
              <MessageSquare className="w-5 h-5 text-red-600" />
              Chat with Your Mentor
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-4 py-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className={`text-xs ${msg.isOwn ? 'bg-gray-600 text-white' : 'bg-red-600 text-white'}`}>
                        {msg.sender.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`flex-1 ${msg.isOwn ? 'text-right' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-gray-800">{msg.sender}</span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <div className={`max-w-xs p-3 rounded-lg text-sm ${
                        msg.isOwn 
                          ? 'bg-gray-600 text-white ml-auto' 
                          : 'bg-red-50 text-gray-900 border border-red-200'
                      }`}>
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="p-4 border-t bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={handleKeyPress}
                  className="flex-1 border-gray-300"
                />
                <Button 
                  onClick={handleSendMessage} 
                  size="sm" 
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
