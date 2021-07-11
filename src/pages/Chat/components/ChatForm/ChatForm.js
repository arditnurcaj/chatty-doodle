import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Input, SendButton } from "../";

import { addMessage } from "redux/chat/chatActions";

import { StyledChatForm, ChatFormContainer } from "./ChatForm.styles";

const ChatForm = () => {
  const dispatch = useDispatch();
  const { isAddingMessage } = useSelector((state) => state.chat);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { message: "" },
  });

  const onSubmit = (data) => {
    dispatch(addMessage(data.message));
    reset({ message: "" });
  };

  return (
    <StyledChatForm>
      <ChatFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='message'
          placeholder='Message'
          {...register("message", { required: true })}
        />
        <SendButton readOnly={isAddingMessage} type='submit'>
          {isAddingMessage ? "Sending..." : "Send"}
        </SendButton>
      </ChatFormContainer>
    </StyledChatForm>
  );
};

export default ChatForm;
