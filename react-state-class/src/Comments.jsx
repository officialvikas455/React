import { useState } from "react";
import { useFormik } from "formik";

export default function CommentsApp() {
  const [comments, setComments] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },

    onSubmit: (values, { resetForm }) => {
      // add comment
      setComments((prev) => [...prev, values]);

      // reset form
      resetForm();
    },
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 Add Comment</h2>

      {/* ✅ use formik.handleSubmit */}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <br /><br />

        <textarea
          name="remarks"
          placeholder="Enter remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br /><br />

        <button type="submit">Add Comment</button>
      </form>

      <hr />

      <h3>All Comments</h3>

      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        comments.map((c, i) => (
          <div key={i} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p><strong>{c.username}</strong></p>
            <p>{c.remarks}</p>
            <p>Rating: {c.rating}</p>
          </div>
        ))
      )}
    </div>
  );
}