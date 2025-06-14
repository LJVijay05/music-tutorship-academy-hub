
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Phone, Video, MoreVertical, Paperclip, Mic, File, Music } from 'lucide-react';
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
      message: 'Great work on your Logic Pro X arrangement! The automation on the filter sweep really adds movement. Try using Sculpture for the lead sound next.',
      time: '10:30 AM',
      isOwn: false,
      channel: 'sarah-mentor',
      hasAttachment: false,
    },
    {
      id: 2,
      sender: 'You',
      role: 'student',
      message: 'Thanks! Should I bounce the MIDI to audio first or keep it as software instruments?',
      time: '10:35 AM',
      isOwn: true,
      channel: 'sarah-mentor',
      hasAttachment: false,
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      role: 'mentor',
      message: 'Keep it as MIDI for now - easier to make changes. Once we finalize the arrangement, then bounce to audio for mixing.',
      time: '10:37 AM',
      isOwn: false,
      channel: 'sarah-mentor',
      hasAttachment: false,
    },
    {
      id: 4,
      sender: 'Production Support',
      role: 'support',
      message: 'Your Ableton Live 12 template pack "Electronic Essentials" is ready for download!',
      time: '11:00 AM',
      isOwn: false,
      channel: 'support',
      hasAttachment: true,
    },
    {
      id: 5,
      sender: 'Alex Rodriguez',
      role: 'mentor',
      message: 'Just listened to your track submission. The mix is solid! Lets work on the mastering chain in our next Ableton session.',
      time: '11:15 AM',
      isOwn: false,
      channel: 'alex-mentor',
      hasAttachment: false,
    },
  ]);

  const channels = [
    { id: 'sarah-mentor', name: 'Sarah (Logic Pro)', online: true, unread: 1, specialty: 'Logic Pro X' },
    { id: 'alex-mentor', name: 'Alex (Ableton)', online: true, unread: 1, specialty: 'Ableton Live' },
    { id: 'support', name: 'Technical Support', online: true, unread: 1, specialty: 'DAW Setup' },
    { id: 'feedback', name: 'Track Reviews', online: true, unread: 0, specialty: 'Mix Feedback' },
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
        hasAttachment: false,
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'mentor': return 'bg-red-100 text-red-800';
      case 'support': return 'bg-orange-100 text-orange-800';
      case 'feedback': return 'bg-red-100 text-red-800';
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
            DAW Production Chat
          </CardTitle>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost">
              <File className="w-4 h-4" />
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
              className={`flex items-center gap-2 whitespace-nowrap relative ${
                activeChannel === channel.id 
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                  : 'border-red-200 text-red-700 hover:bg-red-50'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${channel.online ? 'bg-green-500' : 'bg-gray-400'}`} />
              <div className="text-left">
                <div className="text-xs">{channel.name}</div>
                <div className="text-xs opacity-75">{channel.specialty}</div>
              </div>
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
                  <AvatarFallback className="text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white">
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
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white ml-auto' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    {msg.message}
                    {msg.hasAttachment && (
                      <div className="mt-2 flex items-center gap-2 text-xs opacity-75">
                        <Music className="w-3 h-3" />
                        <span>Attachment included</span>
                      </div>
                    )}
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
            <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="border-red-200 text-red-700 hover:bg-red-50">
              <Mic className="w-4 h-4" />
            </Button>
            <Button onClick={handleSendMessage} size="sm" className="bg-gradient-to-r from-red-600 to-orange-600">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
