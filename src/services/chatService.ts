interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

/**
 * Portfolio-safe demonstration chat.
 *
 * The original prototype called an AI provider directly from the browser,
 * which would expose any supplied API credential. This version deliberately
 * uses deterministic local responses and performs no external AI requests.
 */
class ChatService {
  async getChatResponse(messages: ChatMessage[], currentPage?: string): Promise<string> {
    const latestMessage = messages[messages.length - 1]?.content ?? '';
    return this.getFallbackResponse(latestMessage, currentPage);
  }

  async getContextualGreeting(path: string): Promise<string> {
    if (path.includes('/therapist')) {
      return 'Welcome! Explore ways to reduce repetitive administrative work in a therapy practice. How can I help?';
    }
    if (path.includes('/dentist')) {
      return 'Welcome! Explore workflow automation ideas for appointment-driven dental practices. How can I help?';
    }
    if (path.includes('/vet')) {
      return 'Welcome! Explore workflow automation ideas for veterinary teams. How can I help?';
    }
    if (path.includes('/medspa')) {
      return 'Welcome! Explore workflow automation ideas for client-focused wellness practices. How can I help?';
    }
    return 'Welcome! This portfolio demo shows how a guided assistant can explain workflow automation. How can I help?';
  }

  private getFallbackResponse(userMessage: string, currentPage?: string): string {
    const message = userMessage.toLowerCase();

    if (message.includes('price') || message.includes('cost')) {
      return 'Automation projects vary by workflow and integration needs. A discovery session is normally the first step toward an estimate.';
    }
    if (message.includes('appointment') || message.includes('reminder')) {
      return 'Appointment workflows can combine scheduling events, consent-aware reminders, and staff follow-up while keeping humans in control.';
    }
    if (message.includes('intake')) {
      return 'A structured intake workflow can validate required information and route submissions without asking staff to re-enter the same data.';
    }
    if (message.includes('missed') || message.includes('call')) {
      return 'A missed-call workflow can acknowledge the caller and create a follow-up task without pretending that an automated message replaces staff.';
    }
    if (message.includes('how') || message.includes('work')) {
      return 'The usual process is to map a workflow, identify safe automation boundaries, build a small integration, and measure the result before expanding.';
    }

    const pageLabel = currentPage ? 'this page' : 'the site';
    return `This local portfolio assistant can explain the workflow examples shown on ${pageLabel}. Try asking about intake, reminders, missed calls, or implementation.`;
  }
}

export default ChatService;
