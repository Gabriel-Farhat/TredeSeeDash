"use client"
import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function AlertNews() {
  const [currentMessage, setCurrentMessage] = useState(0);

  const news = [
    
    "Dólar salta e se aproxima de R$ 5,60 'de olho em juros dos EUA'; Bolsa interrompe recordes;",
    "Bolsas da Europa caem com piora em NY, Paris e Frankfurt têm primeira baixa em 6 dias;",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % news.length);
    }, 10000);

    return () => clearInterval(interval)
  }, []);

  return (
    <Alert className="pb-0">
      <AlertDescription>
        <Avatar className="w-8 h-8">
          <AvatarImage
            className="w-8 h-8 mb-2"
            src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/CNN.png"
          />
          <AvatarFallback>CNN</AvatarFallback>
        </Avatar>
        <div>{news[currentMessage]}</div>
      </AlertDescription>
    </Alert>
  );
}