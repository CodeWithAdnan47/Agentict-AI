from fastapi import APIRouter,HTTPException,Depends
from schemas.menu import CreateMenu,DisplayMenu,UpdateMenu,DeleteResponse
from sqlalchemy.orm import Session
from db.database import get_db
from models.menu import db_menu
from typing import List

router=APIRouter(
  prefix="/menu",
  tags=["menu"]
)

@router.get("/",response_model=List[DisplayMenu])
def get_all_menu(
  db:Session=Depends(get_db)
):
  menus=db.query(db_menu).all()
  return menus

@router.get("/{id}",response_model=DisplayMenu)
def get_menu(
  id:int,
  db:Session=Depends(get_db)
):
  menu = db.query(db_menu).filter(db_menu.id==id).first()
  if not menu:
    raise HTTPException(status_code=404,detail="menu not found")
  else: 
    return menu
  


@router.post("/",response_model=DisplayMenu)
def add_menu(
  rqmenu:CreateMenu,
  db:Session=Depends(get_db)
):
  new_menu=db_menu(
    id=rqmenu.id,
    title=rqmenu.title,
    description=rqmenu.description,
    price=rqmenu.price,
    category=rqmenu.category,
    available=rqmenu.available
  )

  db.add(new_menu)
  db.commit()
  db.refresh(new_menu)
  return new_menu


@router.put("/{id}",response_model=DisplayMenu)
def menu_update_full(
  id:int,
  req_menu:CreateMenu,
  db:Session=Depends(get_db)
):
  menu=db.query(db_menu).filter(db_menu.id==id).first()
  menu.title=req_menu.title
  menu.description=req_menu.description
  menu.price=req_menu.price
  menu.category=req_menu.category
  menu.available=req_menu.available
  db.commit()
  db.refresh(menu)
  return menu

@router.patch("/{id}",response_model=DisplayMenu)
def menu_update_partial(
  id:int,
  req_menu:UpdateMenu,
  db:Session=Depends(get_db)
):
  menu=db.query(db_menu).filter(db_menu.id==id).first()

  if req_menu.title is not None:
    menu.title=req_menu.title
  if req_menu.description is not None:
    menu.description=req_menu.description
  if req_menu.price is not None:
    menu.price=req_menu.price
  if req_menu.category is not None:
    menu.category=req_menu.category
  if req_menu.available is not None:
    menu.available=req_menu.available
  db.commit()
  db.refresh(menu)
  return menu

@router.delete("/{id}",response_model=DeleteResponse)
def delete_menu_item(
  id:int,
  db:Session=Depends(get_db)
):
  menu=db.query(db_menu).filter(db_menu.id==id).first()
  if not menu:
    return DeleteResponse(message="menu not found")
  else:
    db.delete(menu)
    db.commit()
    return DeleteResponse(message="menu deleted successfully")