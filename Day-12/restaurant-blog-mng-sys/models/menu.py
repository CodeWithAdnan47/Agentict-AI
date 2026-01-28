from db.database import Base
from sqlalchemy import Column,Integer,String,Float,Boolean

class db_menu(Base):
  __tablename__="menu"

  id=Column(Integer,primary_key=True,index=True)
  title=Column(String)
  description=Column(String)
  price=Column(Float,nullable=False)
  category=Column(String)
  available=Column(Boolean)