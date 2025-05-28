import './Edit.css';

function Edit() {
  return (
    <>
      <h1>Edit Todos:</h1>
      <input placeholder="Name of Task" />
      <input placeholder="Description" />
      <h8>Does task completed?</h8>
      <div className='status'>
        <button >Yes</button>
        <button> No </button>
      </div>
      <a href="/Tasks.jsx">Back to Fruits</a>
    </>
  )
}
export default Edit;

{/* <title>Edit Fruit</title>
</head >

  <body>
    <h1>Edit <%= fruit.name %>
    </h1>

    <form action="/fruits/<%=fruit._id%>?_method=PUT" method="POST">
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" value="<%= fruit.name %>" required />

      <label for="isReadyToEat">Ready to Eat?</label>
      <input type="checkbox" name="isReadyToEat" id="isReadyToEat" <% if (fruit.isReadyToEat) { %> checked <% } %> />

      <button type="submit">Update Fruit</button>
    </form> */}
