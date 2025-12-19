// Telegram Bot API integration
// This service handles sending consultation requests to Telegram

interface ConsultationData {
    name: string;
    email: string;
    phone: string;
    department: string;
    message: string;
}

export const sendToTelegram = async (data: ConsultationData): Promise<boolean> => {
    // Telegram Bot API configuration
    // Replace with your actual bot token and chat ID
    const TELEGRAM_BOT_TOKEN = '8405793259:AAFEAhX5aEdxNk6_2S8TnLx3tkEkS-eFafY';
    const TELEGRAM_CHAT_ID = '5589621167';

    const message = `
🏥 *New Consultation Request - Shine Health Care*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🏨 *Service:* ${data.department}
💬 *Message:* ${data.message || 'No message provided'}

_Submitted at: ${new Date().toLocaleString()}_
  `;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            }
        );

        if (!response.ok) {
            console.error('Failed to send message to Telegram');
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return false;
    }
};
