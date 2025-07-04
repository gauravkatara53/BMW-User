// src/context/SocketContext.tsx
import React, { createContext, useEffect, useState } from "react";
import socket from "@/Socket/socket";
import { toast } from "react-toastify";

interface NotificationData {
  message: string;
  bookingId: string;
  type: string;
  userId: string;
  partnerId: string;
}

interface SocketContextType {
  notifications: NotificationData[];
}

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  useEffect(() => {
    socket.on("notify", (data: NotificationData) => {
      console.log("Notification received:", data);
      toast.success(data.message);
      setNotifications((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("notify"); // Clean up when component unmounts
    };
  }, []);

  return (
    <SocketContext.Provider value={{ notifications }}>
      {children}
    </SocketContext.Provider>
  );
};
