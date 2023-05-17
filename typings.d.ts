interface Message {
  text: string | ChatCompletionResponseMessage;
  //   text: AxiosResponse<CreateCompletionResponse, any>;
  createdAt: admin.firestore.serverTimestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
