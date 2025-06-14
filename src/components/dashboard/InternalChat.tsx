
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Phone, Video, MoreVertical, Paperclip, Mic } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export const InternalChat = () => {
  const [message, setMessage] = useState('');
  const [activeChannel, setActiveChannel] = useState('sarah-mentor');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Sarah Johnson',
      role: 'mentor',
      message: 'Great work on your latest beat! The 808 pattern is really coming together. Try adding some swing to the hi-hats next.',
      time: '10:30 AM',
      isOwn: false,
      channel: 'sarah-mentor',
    },
    {
      id: 2,
      sender: 'You',
      role: 'student',
      message: 'Thanks! Should I use the FL Studio swing knob or manually adjust the timing?',
      time: '10:35 AM',
      isOwn: true,
      channel: 'sarah-mentor',
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      role: 'mentor',
      message: 'Both methods work! For learning, try manual adjustment first - it helps you understand groove better.',
      time: '10:37 AM',
      isOwn: false,
      channel: 'sarah-mentor',
    },
    {
      id: 4,
      sender: 'Production Support',
      role: 'support',
      message: 'Your sample pack "Trap Essentials Vol. 2" is ready for download!',
      time: '11:00 AM',
      isOwn: false,
      channel: 'support',
    },
  ]);

  const channels = [
    { id: 'sarah-mentor', name: 'Sarah (Mentor)', online: true, unread: 1 },
    { id: 'alex-mentor', name: 'Alex (Producer)', online: false, unread: 0 },
    { id: 'support', name: 'Production Support', online: true, unread: 1 },
    { id: 'feedback', name: 'Track Feedback', online: true, unread: 0 },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        role: 'student',
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
        channel: activeChannel,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'mentor': return 'bg-blue-100 text-blue-800';
      case 'support': return 'bg-green-100 text-green-800';
      case 'feedback': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredMessages = messages.filter(msg => msg.channel === activeChannel);
  const activeChannelInfo = channels.find(ch => ch.id === activeChannel);

  return (
    <Card className="h-96 flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Production Chat
          </CardTitle>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Video className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Channel Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {channels.map((channel) => (
            <Button
              key={channel.id}
              variant={activeChannel === channel.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveChannel(channel.id)}
              className="flex items-center gap-2 whitespace-nowrap relative"
            >
              <div className={`w-2 h-2 rounded-full ${channel.online ? 'bg-green-500' : 'bg-gray-400'}`} />
              {channel.name}
              {channel.unread > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {channel.unread}
                </span>
              )}
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {filteredMessages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}>
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-xs">
                    {msg.sender.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className={`flex-1 ${msg.isOwn ? 'text-right' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{msg.sender}</span>
                    {!msg.isOwn && (
                      <Badge className={`text-xs ${getRoleColor(msg.role)}`}>
                        {msg.role}
                      </Badge>
                    )}
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <div className={`max-w-xs p-3 rounded-lg text-sm ${
                    msg.isOwn 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-auto' 
                      : 'bg-gray-100 text-gray-900'
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
              placeholder={`Message ${activeChannelInfo?.name}...`}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button size="sm" variant="outline">
              <Mic className="w-4 h-4" />
            </Button>
            <Button onClick={handleSendMessage} size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
