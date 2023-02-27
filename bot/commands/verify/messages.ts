import dedent from 'dedent';

export default {
  commandDescription: () =>
    'Begins the verification process for this server, or resumes from where you left off.',
  welcomeEmbedDescription: () => dedent`
    Arc - UNSW Student Life strongly recommends all student societies verify their members' identities before allowing them to interact with their online communities.

    To send messages in our server, we require the following:
    (1) Your full name
    (2) Whether or not you're currently a student at UNSW

    (2a) If yes, your UNSW-issued zID
    
    (2b) If not, your email address
    (3b) And your government-issued photo ID (e.g. driver's license or photo card)
    
    The information you share with us is only accessible by our current executive team - we do not share this with any other parties. You may request to have your record deleted if you are no longer a member of our server.

    If you have questions or you're stuck, feel free to message any of our executives. :)
  `,
  welcomeEmbedTitle: (guildName: string) => `Welcome to ${guildName}!`,
  promptEmbedDescription: () =>
    'You can restart this verification process at any time by typing `/restart`.',
  promptEmbedTitle: () =>
    'If you understand, press the button below to proceed',
};
