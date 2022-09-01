import SingleBook from "./SingleBook";


function AllBook(props) {
    
    return(
      <div id="ff">
        {
          props.books.map(libro => (
            <SingleBook book={libro}/>
          ))
        }
  </div>
    )
}
export default AllBook;