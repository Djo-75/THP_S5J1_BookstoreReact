import '/home/djo75/Bureau/Code/THP/DEV/S5/S5J1/bookstoreact/src/assets/style.css'

const Book = (props) => {

  return (
  
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src={props.cover} alt="tof gens" />
      <div className="card-body">
        <h2 className="card-text">{props.title}</h2>
        <p>{props.shortDescription}</p>
        {/* <Button variant="light"></Button>{' '}
        <Button variant="light"></Button>{' '} */}
      </div>
    </div>
  )
}

export default Book;