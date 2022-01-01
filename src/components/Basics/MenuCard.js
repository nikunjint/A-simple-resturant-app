import React from 'react'

 const MenuCard = ({menuData}) => {
    return (
        <>
        <row>
        <section className="container">
        {
            menuData.map((currEle)=>{
             const {id,name,description,category,image}=currEle;
              return(
                  <>
                <div className="card-container"key={currEle.id}>
            
            <div className="card">
            <div className="card-body">
                <span className="circle">{id}</span>
               
                <h2 className="card-title">{name}</h2>
                <img src={image} alt="" style={{objectFit:"cover", width:"100%", height:"15vw"}}/>
                <span className="card-description subtle">{description}</span>
                <span className="card-arthur subtle">{category}</span>
                <div className="card-read">Read</div>
                 <span className="card-tag">Order now </span>

            </div>

            </div>
        </div>
        </>
              )
            })
        }
        </section>
        </row>
      </>   
         
    )}
export default MenuCard;
