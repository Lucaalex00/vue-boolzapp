const { createApp } = Vue;
createApp({
  data() {
    return {
      /* My Object's Array */
      contacts: [
        {
          name: "Michele",
          avatar: "/img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },

            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },

            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },

        {
          name: "Fabio",
          avatar: "/img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },

        {
          name: "Samuele",
          avatar: "/img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },

        {
          name: "Alessandro B.",
          avatar: "/img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },

        {
          name: "Alessandro L.",
          avatar: "/img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },

        {
          name: "Claudia",
          avatar: "/img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },

        {
          name: "Federico",
          avatar: "/img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },

        {
          name: "Davide",
          avatar: "/img/avatar_8.jpg",
          visible: true,
          messages: [],
        },
      ],
      /* My Variables */
      activeContact: null,
      userText: "",
      contactText: "ok",
      contactSearchText: "",
    };
  },
  //Invoke a "COMPUTED" property
  //This property is same as method, but it doesn't "RECALL" any function.
  //It remember and follow the user's instruction
  computed: {
    //f for contact's Filter
    filteredContacts() {
      //Control when "INPUT TEXT" is empty
      if (!this.contactSearchText) {
        //Return all "CONTACTS"
        return this.contacts;
      }
      //Make a variable with same value of "INPUT TEXT" with LowerCase for control
      const searchText = this.contactSearchText.toLowerCase();
      //Return "Contacts" array FILTERED
      return this.contacts.filter((contact) =>
        //Control if "INPUT TEXT" is includes in "CONTACT.NAME" in LowerCase
        contact.name.toLowerCase().includes(searchText)
      );
    },
  },
  methods: {
    //f to invoke :
    //addNewMessage f
    //getAnswer f
    //clearInputField f
    sendMessage() {
      this.addNewMessage();
      this.getAnswer();
      this.clearInputField();
    },

    //f for make user able to add new message from input field in "MAIN HTML"
    addNewMessage() {
      if (this.activeContact != null && this.userText.length > 0) {
        const currentDate = new Date();
        this.activeContact.messages.push({
          date: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
          message: this.userText,
          status: "sent",
        });
        console.log(this.userText);
      }
    },

    //f for make user able to remove any message from activeContact conversation with a 'ANGLE-DOWN' icon over the message and a :hover selector CSS to show remove's menu.
    removeMessage(mexIndex) {
      if (this.activeContact != null) {
        this.activeContact.messages.splice(mexIndex, 1);
      }
    },

    //f just for clear input field in "MAIN HTML"
    clearInputField() {
      this.userText = "";
    },

    //f to get a dinamically "ok" from contact when user invoke addNewMessage f with 1 seconds' delay
    getAnswer() {
      if (this.activeContact != null && this.userText.length > 0) {
        setTimeout(() => {
          console.log(this.contactText);
          const currentDate = new Date();
          this.activeContact.messages.push({
            date: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
            message: this.contactText,
            status: "received",
          });
          console.log(
            `${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`
          );
        }, 1000);
      }
      //f
      //f
    },

    //f then show Contact's conversation when invoked on a "CLICK"
    showMainConversation(contact) {
      this.activeContact = { ...contact };
    },

    //f to keep last message and stamp in HTML
    getLastMessage(contact) {
      if (contact.messages.length > 0) {
        return contact.messages[contact.messages.length - 1].message;
      }
      return "";
    },

    //f to keep last message TIME and stamp in HTML
    getLastMessageTime(contact) {
      if (contact.messages.length > 0) {
        return contact.messages[contact.messages.length - 1].date;
      }
      return "";
    },
  },
}).mount("#app");
