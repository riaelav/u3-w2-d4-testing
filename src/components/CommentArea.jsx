import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      if (!asin) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzhhMDFjMjUwNDAwMTUxYWI2NGQiLCJpYXQiOjE3NDc3NDQ2ODcsImV4cCI6MTc0ODk1NDI4N30.4kew864a53JJeJH6B5DYuBQhtLt0HwAPl-5RF_kQwnI",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setComments(data);
          setIsError(false);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [asin]); // fetch ogni volta che asin cambia

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
