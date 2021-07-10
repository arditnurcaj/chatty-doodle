import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Input, SendButton } from "../";

import { addMessage } from "redux/chat/chatActions";

import { StyledChatForm, ChatFormContainer } from "./ChatForm.styles";

const ChatForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: { message: "" },
  });

  const onSubmit = (data) => {
    dispatch(addMessage(data.message));
  };

  return (
    <StyledChatForm>
      <ChatFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='message'
          placeholder='Message'
          {...register("message", { required: true })}
        />
        <SendButton type='submit'>Send</SendButton>
      </ChatFormContainer>
    </StyledChatForm>
  );
};

export default ChatForm;
