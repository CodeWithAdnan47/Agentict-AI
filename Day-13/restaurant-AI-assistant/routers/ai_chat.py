from fastapi import APIRouter,HTTPException
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from schema import ChatRequest,ChatResponse
from langchain.agents import create_agent
from langgraph.checkpoint.sqlite import SqliteSaver
import sqlite3
import os

router=APIRouter(
  prefix="/ai",
  tags=["ai chat"]
)

load_dotenv()

DB_PATH="blog_mng.db"   
GOOGLE_API_KEY=os.getenv("GOOGLE_API_KEY")


def get_checkpointer():
  conn=sqlite3.connect(DB_PATH,check_same_thread=False)
  checkpointer=SqliteSaver(conn)
  checkpointer.setup()
  return checkpointer

checkpointer=get_checkpointer()

def initialize_agent():
  llm=ChatGoogleGenerativeAI(model="gemini-2.5-flash-lite",api_key=GOOGLE_API_KEY)
  agent=create_agent(
   model=llm,
   tools=[],
   checkpointer=checkpointer
  )
  return agent

agent=initialize_agent()





@router.post("/chat",response_model=ChatResponse)
def chat_with_ai(
  request:ChatRequest
):
  try:
    if not request.question.strip():
      raise HTTPException(status_code=400,details="no question recieved")
    
    config={"configurable":{"thread_id":"harsh"}}

    result=agent.invoke(
      {"messages":[{"role":"user","content":request.question}]},config=config
    )

    response_content=result["messages"][-1].content

    return ChatResponse(response=response_content)
   
  except Exception as e:
    raise HTTPException(status_code=500,details=f"error processing request : {e}")