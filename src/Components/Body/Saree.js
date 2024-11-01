import React from 'react'

const Saree = ({saree}) => {
  return (
    <div>
    <div className="card" style={{ width: '20rem', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <img src={saree.img} className="card-img-top" alt="Card image" style={{'height': '300px'}} />
        <div className="card-body" style={{ flexGrow: 1 }}>
            <h5 className="card-title">{saree.id} - {saree.price}</h5>
            <p className="card-text">
                An iconic kanjipuram saree
            </p>
            <a href="#" className="btn btn-primary">Pick</a>
        </div>
    </div>
</div>
  )
}

export default Saree