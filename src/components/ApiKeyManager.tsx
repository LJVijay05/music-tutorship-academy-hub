
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { setApiKey, hasApiKey, clearApiKey } from "@/utils/locationApi";
import { Key, AlertCircle } from "lucide-react";

interface ApiKeyManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onApiKeySet?: () => void;
}

const ApiKeyManager = ({ open, onOpenChange, onApiKeySet }: ApiKeyManagerProps) => {
  const [apiKey, setApiKeyInput] = useState('');
  const { toast } = useToast();

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    try {
      setApiKey(apiKey.trim());
      toast({
        title: "Success",
        description: "API key saved successfully!",
      });
      setApiKeyInput('');
      onOpenChange(false);
      if (onApiKeySet) {
        onApiKeySet();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save API key",
        variant: "destructive",
      });
    }
  };

  const handleClearApiKey = () => {
    clearApiKey();
    toast({
      title: "Success",
      description: "API key cleared successfully!",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="w-5 h-5 text-red-600" />
            Country State City API Key
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-700">
              <p className="font-medium mb-1">Get your free API key:</p>
              <p>Visit <a href="https://countrystatecity.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">countrystatecity.in</a> to register and get your free API key for country, state, and city data.</p>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Enter your API key:
            </label>
            <Input
              type="password"
              placeholder="Enter your Country State City API key"
              value={apiKey}
              onChange={(e) => setApiKeyInput(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleSaveApiKey}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
            >
              Save API Key
            </Button>
            
            {hasApiKey() && (
              <Button 
                onClick={handleClearApiKey}
                variant="outline"
                className="flex-1"
              >
                Clear Existing Key
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyManager;
