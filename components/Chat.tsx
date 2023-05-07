"use client";

type Props = {
  chatId: string;
};

export default function Chat({ chatId }: Props) {
  // useful trick
  // flex-1 = used up all the space ( ChatInput then is forced to be at the bottom )
  return <div className="flex-1"></div>;
}
