import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzhhMDFjMjUwNDAwMTUxYWI2NGQiLCJpYXQiOjE3NDc3NDQ2ODcsImV4cCI6MTc0ODk1NDI4N30.4kew864a53JJeJH6B5DYuBQhtLt0HwAPl-5RF_kQwnI",
        },
      });
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata! Controllato il token?");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
