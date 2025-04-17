import { Avatar } from "@heroui/avatar";
import { useChat } from "../hooks/useChat";

export default function ChatList() {
    const { switchUser, userId } = useChat();

    const conversations = [
        { id: '123', name: 'Soporte Técnico' },
    ];

    return (
        <div className="w-full md:w-64 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white p-4 flex flex-col shadow-lg">
            <h2 className="font-bold text-xl mb-6 text-center">Chats</h2>

            <div className="flex-1 space-y-4 overflow-y-auto">
                {conversations.map((user) => (
                    <button
                        key={user.id}
                        onClick={() => switchUser(user.id)}
                        className={`flex items-center w-full p-3 rounded-lg transition-all shadow-md ${
                            userId === user.id
                                ? 'bg-yellow-400 text-blue-900'
                                : 'bg-blue-800 hover:bg-yellow-400 hover:text-blue-900'
                        }`}
                    >
                        <Avatar
                            isBordered
                            radius="lg"
                            src={`https://i.pravatar.cc/150?u=${user.id}`}
                            alt={user.name}
                        />
                        <span className="text-lg font-medium mx-3">{user.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}