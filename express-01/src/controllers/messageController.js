import { messageService } from "../services/index.js";

const getMessages = async (req, res) => {
    const messages = await messageService.getAllMessages();
    if (!messages || messages.length === 0) {
        return res.status(404).json({ error: 'Nenhuma mensagem encontrada!' });
    }
    return res.status(200).json({ message: 'Mensagens encontradas!', messages });
};

const getMessage = async (req, res) => {
    const message = await messageService.getMessageById(req.params.messageId);
    
    if (!message) {
        return res.status(404).json({ error: 'Mensagem não encontrada' });
    }
    
    return res.status(200).json(message);
};

const createMessage = async (req, res) => {
    const message = await messageService.createMessage({
        text: req.body.text,
        userId: req.context.me.id,
    });

    return res.status(201).json(message);
};

const deleteMessage = async (req, res) => {
    const message = await messageService.getMessageById(req.params.messageId);

    if (!message) {
        return res.status(404).json({ error: 'Mensagem não encontrada' });
    }

    await messageService.deleteMessage(req.params.messageId);

    return res.status(204).send();
};

export default {
  getMessages,
  getMessage,
  createMessage,
  deleteMessage,
};
