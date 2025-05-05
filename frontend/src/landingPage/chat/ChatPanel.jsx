import { useState, useEffect, useRef } from "react";
import { Avatar, Badge, Button, TextField, IconButton, Divider } from "@mui/material";
import { Send, AttachFile, EmojiEmotions } from "@mui/icons-material";
import { motion } from "framer-motion";
import EmojiPicker from "emoji-picker-react";
import { io } from "socket.io-client";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() || selectedFile) {
      const newMessage = {
        text: input || null,
        file: selectedFile ? URL.createObjectURL(selectedFile) : null,
        fileName: selectedFile ? selectedFile.name : null,
        sender: "You",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setInput("");
      setSelectedFile(null);
    }
  };


  // const sendMessage = () => {
  //   const messageData = { meetingId, message: input };
  //   socket.emit("message", messageData);
  //   setMessages([...messages, messageData]);
  //   setInput("");
  // };
  
  // const sendFile = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     socket.emit("send-file", { meetingId, fileData: reader.result, fileName: file.name, sender: "You" });
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleEmoji = (e) => {
    setInput((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-blue-50 text-gray-900 w-full max-w-lg mx-auto border shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-blue-700 text-white p-4 shadow-md">
        <h2 className="text-lg font-semibold">Chat</h2>
        <Badge color="error" badgeContent={messages.length}>
          <Avatar alt="User" src="/user-avatar.jpg" />
        </Badge>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <motion.div 
            key={index} 
            className={`p-3 rounded-lg max-w-xs ${msg.sender === "You" ? "bg-blue-600 text-white self-end" : "bg-gray-300 text-gray-900 self-start"}`} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.2 }}
          >
            {msg.text && <p className="text-sm">{msg.text}</p>}

            {msg.file && (
              <a href={msg.file} download={msg.fileName} className="block mt-2 text-sm text-blue-300 underline">
                📎 {msg.fileName}
              </a>
            )}

            <span className="text-xs opacity-70 block mt-1">{msg.timestamp}</span>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Typing Indicator */}
      {typing && <p className="text-sm text-gray-500 p-2">Someone is typing...</p>}
      <Divider />
      
      {/* Input Box */}
      <div className="flex items-center p-3 bg-white">
        <IconButton >
          <EmojiEmotions onClick={()=> setOpen((prev)=>!prev) } className="text-gray-500" />
          {open && <EmojiPicker onEmojiClick={handleEmoji} />}
        </IconButton>
        
        {/* Attach File Button */}
        <IconButton component="label">
          <AttachFile className="text-gray-500" />
          <input type="file" hidden onChange={handleFileChange} />
        </IconButton>

        <TextField 
          fullWidth 
          variant="outlined" 
          size="small" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..." 
        />
        <Button variant="contained" color="primary" className="ml-2" onClick={sendMessage}>
          <Send />
        </Button>
      </div>
    </div>
  );
}

