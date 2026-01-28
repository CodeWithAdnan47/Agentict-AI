from pydantic import BaseModel
from typing import Optional
class CreateMenu(BaseModel):
  id:int
  title:str
  description:str
  price:float
  category:str
  available:bool

class DisplayMenu(BaseModel):
  id:int
  title:str
  description:str
  price:float
  category:str
  available:bool

  class Config:
    from_attributes=True

class UpdateMenu(BaseModel):
  id:Optional[int]=None
  title:Optional[str]=None
  description:Optional[str]=None
  price:Optional[float]=None
  category:Optional[str]=None
  available:Optional[bool]=None

class DeleteResponse(BaseModel):
  message:str