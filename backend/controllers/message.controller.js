import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req,res) =>{
    try{
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all:[senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY

        // runs in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message)
        res.status(500).json({error:"Internal Server Error"});
    }
};

// class for obtaining the messages
// we have a sender id that is requested through the user id, and the conversation is logged. The messages are populated, other we would have an error with getmessages controller
export const getMessages = async (req,res) =>{
    try{
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;

      const conversation = await Conversation.findOne({
        participants: {$all: [senderId, userToChatId]},
      }).populate("messages") // populates the message logs that we see in mongodb 
      // opens the possibility of not just giving a single message but giving them one-by-one

      if (!conversation) return res.status(200).json([]);

      const messages = conversation.messages;

      res.status(200).json(messages);
    } catch (error){
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({error: "Internal server error"});

    }
}