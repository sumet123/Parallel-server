import { User } from "src/entities/user.entity";
import { Message } from "src/entities/message.entity";

export class CreateChatRoomDto{
    chatName: string;
    user: any;
    messages: Message[];
    members?: User[];
}

export class joinOrLeaveChatRoomDto{
    chatId: any;
    userId: any;
}