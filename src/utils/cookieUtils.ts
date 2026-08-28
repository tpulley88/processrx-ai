// Utility functions for managing chat response count cookies

const COOKIE_NAME = 'processrx_chat_responses';
const COOKIE_EXPIRES_HOURS = 24; // Reset count every 24 hours

interface ChatSession {
  count: number;
  lastReset: number;
}

export const getChatResponseCount = (): number => {
  try {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1];

    if (!cookieValue) {
      return 0;
    }

    const session: ChatSession = JSON.parse(decodeURIComponent(cookieValue));
    const now = Date.now();
    const hoursSinceReset = (now - session.lastReset) / (1000 * 60 * 60);

    // Reset count if more than 24 hours have passed
    if (hoursSinceReset >= COOKIE_EXPIRES_HOURS) {
      setChatResponseCount(0);
      return 0;
    }

    return session.count;
  } catch (error) {
    console.error('Error reading chat response count:', error);
    return 0;
  }
};

export const setChatResponseCount = (count: number): void => {
  try {
    const session: ChatSession = {
      count,
      lastReset: Date.now()
    };

    const cookieValue = encodeURIComponent(JSON.stringify(session));
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + COOKIE_EXPIRES_HOURS);

    document.cookie = `${COOKIE_NAME}=${cookieValue}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
  } catch (error) {
    console.error('Error setting chat response count:', error);
  }
};

export const incrementChatResponseCount = (): number => {
  const currentCount = getChatResponseCount();
  const newCount = currentCount + 1;
  setChatResponseCount(newCount);
  return newCount;
};

export const resetChatResponseCount = (): void => {
  setChatResponseCount(0);
};

export const getTimeUntilReset = (): string => {
  try {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1];

    if (!cookieValue) {
      return 'Reset in 24 hours';
    }

    const session: ChatSession = JSON.parse(decodeURIComponent(cookieValue));
    const now = Date.now();
    const resetTime = session.lastReset + (COOKIE_EXPIRES_HOURS * 60 * 60 * 1000);
    const timeLeft = resetTime - now;

    if (timeLeft <= 0) {
      return 'Resetting now...';
    }

    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    if (hoursLeft > 0) {
      return `Reset in ${hoursLeft}h ${minutesLeft}m`;
    } else {
      return `Reset in ${minutesLeft}m`;
    }
  } catch (error) {
    console.error('Error calculating reset time:', error);
    return 'Reset in 24 hours';
  }
};