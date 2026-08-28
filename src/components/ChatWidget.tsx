import React, { useState, useEffect, useRef } from 'react';
import ChatService from '../services/chatService';
import { getChatResponseCount, incrementChatResponseCount } from '../utils/cookieUtils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ChatMessage[]>([]);
  const [responseCount, setResponseCount] = useState(getChatResponseCount());
  const [isLimitReached, setIsLimitReached] = useState(getChatResponseCount() >= 100);
  const [showBookingPrompt, setShowBookingPrompt] = useState(false);
  const [preloadedGreeting, setPreloadedGreeting] = useState<string | null>(null);
  const [isLoadingGreeting, setIsLoadingGreeting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatService = useRef(new ChatService()).current;
  
  const RESPONSE_LIMIT = 100;

  // Sync with cookie count on mount (in case user navigated from another page)
  useEffect(() => {
    const cookieCount = getChatResponseCount();
    setResponseCount(cookieCount);
    setIsLimitReached(cookieCount >= RESPONSE_LIMIT);
  }, []);

  // Preload greeting on component mount
  useEffect(() => {
    const preloadGreeting = async () => {
      if (preloadedGreeting || isLoadingGreeting) return;
      
      setIsLoadingGreeting(true);
      try {
        const contextualGreeting = await chatService.getContextualGreeting(window.location.pathname);
        setPreloadedGreeting(contextualGreeting);
      } catch (error) {
        console.error('Error preloading greeting:', error);
        setPreloadedGreeting("Welcome! I help service-based businesses automate workflows and reclaim valuable time. How can I assist you today?");
      } finally {
        setIsLoadingGreeting(false);
      }
    };

    preloadGreeting();
  }, [chatService, preloadedGreeting, isLoadingGreeting]);

  // Initialize with preloaded greeting when chat opens
  useEffect(() => {
    if (open && messages.length === 0) {
      if (preloadedGreeting) {
        // Use preloaded greeting immediately
        setMessages([{
          id: '1',
          text: preloadedGreeting,
          sender: 'bot',
          timestamp: new Date()
        }]);
      } else {
        // Fallback: use default greeting while AI greeting loads in background
        setMessages([{
          id: '1',
          text: "Welcome! I help service-based businesses automate workflows and reclaim valuable time. How can I assist you today?",
          sender: 'bot',
          timestamp: new Date()
        }]);
        
        // If AI greeting loads later, update the message
        const updateGreeting = async () => {
          if (!preloadedGreeting && !isLoadingGreeting) {
            try {
              const contextualGreeting = await chatService.getContextualGreeting(window.location.pathname);
              setMessages(prev => {
                if (prev.length === 1 && prev[0].id === '1') {
                  return [{
                    ...prev[0],
                    text: contextualGreeting
                  }];
                }
                return prev;
              });
            } catch (error) {
              console.error('Error updating greeting:', error);
            }
          }
        };
        
        updateGreeting();
      }
    }
  }, [open, messages.length, preloadedGreeting, isLoadingGreeting, chatService]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    // Handle instant redirects for specific quick replies
    const lowerReply = reply.toLowerCase();
    
    if ((lowerReply.includes('book') && lowerReply.includes('consult')) || 
        lowerReply === 'book a consult' ||
        lowerReply === 'book consultation' ||
        lowerReply === 'schedule consultation' ||
        lowerReply === 'book demo' ||
        lowerReply === "i'm ready to start") {
      // Add user message to show they clicked
      const userMessage: Message = {
        id: Date.now().toString(),
        text: reply,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      
      // Add quick "redirecting" message
      setTimeout(() => {
        const redirectMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "Perfect! Taking you to the booking page now...",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, redirectMessage]);
        
        // Redirect after brief delay
        setTimeout(() => {
          handleBookingRedirect();
        }, 800);
      }, 500);
      
      return;
    }
    
    // For other quick replies, proceed with normal AI conversation
    handleSendMessage(reply);
  };

  // Check if user seems interested in booking
  const detectBookingIntent = (userText: string, botResponse: string): boolean => {
    const userLower = userText.toLowerCase();
    const botLower = botResponse.toLowerCase();
    
    // Strong booking signals
    const bookingKeywords = [
      'yes', 'sure', 'book', 'schedule', 'interested', 'sign up', 
      'when can', 'how do i', 'lets do it', "i'd like", 'sounds good',
      'perfect', 'great', 'awesome', 'email', '@', 'contact me'
    ];
    
    // Check if bot mentioned booking/consultation
    const botMentionsBooking = botLower.includes('consultation') || 
                               botLower.includes('book') || 
                               botLower.includes('contact');
    
    // Check if user shows interest
    const userShowsInterest = bookingKeywords.some(keyword => userLower.includes(keyword));
    
    return botMentionsBooking && userShowsInterest;
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue;
    if (!text.trim()) return;
    
    // Check rate limit
    if (responseCount >= RESPONSE_LIMIT) {
      setIsLimitReached(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsWaitingForResponse(true);
    
    // Update conversation history
    const newConversationHistory: ChatMessage[] = [
      ...conversationHistory,
      { role: 'user', content: text }
    ];
    setConversationHistory(newConversationHistory);
    
    // Show typing indicator after a brief delay
    setTimeout(() => {
      setIsWaitingForResponse(false);
      simulateTyping();
    }, 800);
    
    try {
      // Get AI response
      const botResponse = await chatService.getChatResponse(
        newConversationHistory, 
        window.location.pathname
      );
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setConversationHistory(prev => [...prev, { role: 'assistant', content: botResponse }]);
      
      // Increment response count in cookie and state
      const newCount = incrementChatResponseCount();
      setResponseCount(newCount);
      setIsLimitReached(newCount >= RESPONSE_LIMIT);
      
      // Check for booking intent
      if (detectBookingIntent(text, botResponse)) {
        setTimeout(() => {
          setShowBookingPrompt(true);
        }, 2000); // Show booking prompt after 2 seconds
      }
      
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Fallback response on error
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. For immediate assistance, please visit processrx.ai/contact or call (555) PROCESS. Is there anything specific about automation I can help you with?",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
      const newCount = incrementChatResponseCount();
      setResponseCount(newCount);
      setIsLimitReached(newCount >= RESPONSE_LIMIT);
    }
    
    setIsTyping(false);
    setIsWaitingForResponse(false);
  };

  const handleBookingRedirect = () => {
    window.location.href = '/contact';
  };

  // Get page-specific quick reply buttons
  const getQuickReplies = (): string[] => {
    const path = window.location.pathname;
    
    if (path.includes('/therapist')) {
      return [
        "How can automation help therapists?",
        "What about client confidentiality?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/dentist')) {
      return [
        "How can automation make my office more efficient?",
        "Can you reduce no-shows?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/vet')) {
      return [
        "How does this help with pet records?",
        "Can you automate vaccination reminders?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/medspa')) {
      return [
        "Can you improve client bookings?",
        "What about aftercare follow-ups?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/intake')) {
      return [
        "How do you automate forms?",
        "Is client data secure?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/appointment-reminders')) {
      return [
        "How much do no-shows decrease?",
        "What reminder methods do you use?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/missed-calls')) {
      return [
        "How fast do you follow up?",
        "What's the conversion rate?",
        "Book a consult"
      ];
    }
    
    if (path.includes('/contact')) {
      return [
        "What happens in the consultation?",
        "How long does setup take?",
        "I'm ready to start"
      ];
    }
    
    // Default buttons for home and other pages
    return [
      "Show me how it works",
      "Book a consult", 
      "I have questions"
    ];
  };


  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          className="w-14 h-14 rounded-full bg-purple-700 flex items-center justify-center shadow-lg hover:bg-purple-800 transition relative"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
        >
          {/* Show pulse animation when greeting is ready, loading indicator when preparing */}
          {isLoadingGreeting ? (
            <span className="absolute w-4 h-4 bg-orange-400 rounded-full animate-pulse top-2 right-2"></span>
          ) : preloadedGreeting ? (
            <span className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping opacity-60 top-2 right-2"></span>
          ) : (
            <span className="absolute w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-60 top-2 right-2"></span>
          )}
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l.8-3.2A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
        </button>
      )}
      {open && (
        <div className="w-[350px] h-[500px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between px-4 py-3 bg-purple-700 text-white rounded-t-3xl">
            <span className="font-bold">ProcessRx Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block max-w-[80%] p-3 rounded-xl ${
                  message.sender === 'user' 
                    ? 'bg-purple-700 text-white' 
                    : 'bg-purple-100 text-purple-900'
                }`}>
                  {message.text}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            
            {isWaitingForResponse && (
              <div className="text-right mb-4">
                <div className="inline-block bg-gray-100 text-gray-600 rounded-xl px-4 py-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
                    <span>Message sent</span>
                  </div>
                </div>
              </div>
            )}
            
            {isTyping && !isWaitingForResponse && (
              <div className="text-left mb-4">
                <div className="inline-block bg-purple-100 text-purple-900 rounded-xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {getQuickReplies().map((reply, index) => (
                  <button 
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 rounded-full bg-purple-700 text-white text-xs font-semibold hover:bg-purple-800 transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Rate Limit Message */}
          {isLimitReached && (
            <div className="p-4 bg-orange-50 border-t border-orange-200">
              <div className="text-sm text-orange-800 text-center">
                <strong>Chat limit reached</strong><br />
                You've used all 100 responses for today. Ready to book your consultation?
              </div>
              <button
                onClick={handleBookingRedirect}
                className="w-full mt-3 px-4 py-2 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
              >
                Book Free Consultation
              </button>
            </div>
          )}
          
          {/* Booking Prompt */}
          {showBookingPrompt && !isLimitReached && (
            <div className="p-4 bg-green-50 border-t border-green-200">
              <div className="text-sm text-green-800 text-center mb-3">
                <strong>Ready to get started?</strong><br />
                It sounds like you're interested in our automation services!
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleBookingRedirect}
                  className="flex-1 px-4 py-2 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
                >
                  Book Consultation
                </button>
                <button
                  onClick={() => setShowBookingPrompt(false)}
                  className="flex-1 px-4 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                >
                  Keep Chatting
                </button>
              </div>
            </div>
          )}
          
          {/* Input Area */}
          {!isLimitReached && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center text-white hover:bg-purple-800 transition disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <div className="text-xs text-gray-400 mt-2 text-center">
                {responseCount}/{RESPONSE_LIMIT} responses • ProcessRx.ai
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget; 