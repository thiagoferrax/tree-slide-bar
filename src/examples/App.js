import React from "react";
import TreeSlideBar from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>TreeSlideBar Example</h1>
    <TreeSlideBar name='checklist' legend='My checklist' tree={[
      {
        "id": 1,
        "description": "Code Review Checklist",
        "parentId": null,
        "children": [
          {
            "id": 2,
            "description": "Easily understandable?",
            "parentId": 1,
            "children": []
          },
          {
            "id": 3,
            "description": "Follows the coding standards/guidelines?",
            "parentId": 1,
            "children": []
          },
          {
            "id": 4,
            "description": "Code has no duplicated parts?",
            "parentId": 1,
            "children": []
          },
          {
            "id": 5,
            "description": "Can I unit easily test and debug the code?",
            "parentId": 1,
            "children": []
          },
          {
            "id": 6,
            "description": "Function or class is not so big?",
            "parentId": 1,
            "children": []
          }
        ]
      }
    ]} />
  </div>
)

export default App
