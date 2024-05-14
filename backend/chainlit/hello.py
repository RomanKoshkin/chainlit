# This is a simple example of a chainlit app.
import chainlit
from chainlit import AskUserMessage, Message, on_chat_start, on_message


@on_chat_start
async def start():
    chainlit.user_session.set('DIALOGS', [])
    
@on_message
async def main(message: Message):
    msg = Message(content="asdf")  # create and empty answer to be sent back to user once the answer is generated
    await msg.send()

# @on_model_change
# async def chng(message: Message):
#     msg = Message(content="asdf")  # create and empty answer to be sent back to user once the answer is generated
#     await msg.send()