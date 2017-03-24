superFriend!

Electron desktop app that pulls your iMessage history and analyzes it with IBM Watson
to give you reminders telling you when and about what to chat with your friends.

BETA mode restrictions for users:
1. can only be iMessage (and maybe gmail)
2. contacts need to be using phone number for iMessage
3. contacts must be from USA (theres some wiggle room here. We are basically just not taking country code into account so if you have two contacts with same 10-digit number but different country code, it's going to cause problems)
4. so far, we won't auto-sync and push you notifications yet.  It will just be a user-driven sync
5. you need manually connect imessage contacts with gmail contacts
6. you can only sync messages from a phone number that you have contact info about (in reality, the messages will be in our database, but there we will not be able to use it because we can't attach a sender/recipient id to it)
