# Telegram Bot Configuration Guide

## Overview
This guide will help you set up a Telegram bot to receive consultation requests from your Shine Healthcare website.

## Prerequisites
- A Telegram account
- Access to the `telegramService.ts` file

## Step-by-Step Setup

### 1. Create a Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Start a conversation with BotFather
3. Send the command: `/newbot`
4. Follow the prompts:
   - Enter a name for your bot (e.g., "Shine Healthcare Bot")
   - Enter a username for your bot (must end in 'bot', e.g., "shinehealthcare_bot")
5. BotFather will provide you with a **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
6. **Save this token** - you'll need it later

### 2. Get Your Chat ID

**Option A: Using @userinfobot**
1. Search for **@userinfobot** in Telegram
2. Start a conversation with it
3. It will send you your Chat ID immediately

**Option B: Using your bot**
1. Search for your newly created bot in Telegram
2. Start a conversation by clicking "Start"
3. Send any message to the bot
4. Open this URL in your browser (replace `YOUR_BOT_TOKEN` with the token from step 1):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
5. Look for `"chat":{"id":` in the response - the number after `id` is your Chat ID

### 3. Configure the Application

1. Open the file: `c:\Users\mike\Documents\shinehealthcare\telegramService.ts`
2. Find these lines:
   ```typescript
   const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
   const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';
   ```
3. Replace the placeholder values:
   ```typescript
   const TELEGRAM_BOT_TOKEN = '123456789:ABCdefGHIjklMNOpqrsTUVwxyz';  // Your actual bot token
   const TELEGRAM_CHAT_ID = '987654321';  // Your actual chat ID
   ```
4. Save the file

### 4. Test the Integration

1. Run your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the Contact page
3. Fill out the consultation form
4. Submit the form
5. Check your Telegram - you should receive a message with the consultation details!

## Message Format

When a user submits a consultation request, you'll receive a message like this:

```
🏥 New Consultation Request - Shine Health Care

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +251912345678
🏨 Service: General Medical Consultation
💬 Message: I have been experiencing headaches...

Submitted at: 12/19/2025, 10:30:00 AM
```

## Troubleshooting

### Bot not receiving messages
- Verify the bot token is correct
- Make sure you've started a conversation with your bot
- Check that the chat ID is correct
- Ensure your internet connection is stable

### CORS or network errors
- The Telegram API should work from browsers, but if you encounter issues, you may need to implement a backend proxy

### Testing locally
- The integration will work on localhost during development
- No special configuration needed for testing

## Security Notes

> [!IMPORTANT]
> - **Never commit your bot token** to version control
> - Consider using environment variables for production
> - The bot token gives full control of your bot - keep it secret!

## Next Steps

Once configured, your Telegram bot will automatically receive all consultation requests submitted through your website. You can:
- Reply directly to users on Telegram
- Create a group chat with your team to manage requests
- Set up automated responses using BotFather commands

---

For more information, visit the [Telegram Bot API Documentation](https://core.telegram.org/bots/api).
