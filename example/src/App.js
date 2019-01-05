import React from 'react'

import TreeSlideBar from 'tree-slide-bar'

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>TreeSlideBar Examples</h1>
    <hr/>
    <TreeSlideBar cols='12' name='checklist' legend='Code Review Checklist' tree={[
      {
        "id": 1,
        "description": "Code Review",
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
    <hr/>
    <TreeSlideBar cols='12' name='checklist' legend='Basic Scrum Checklist' tree={[
      {
        "id": 7,
        "description": "How is my Scrum?",
        "parentId": null,
        "children": [
          {
            "id": 8,
            "description": "Roles",
            "parentId": 7,
            "children": [
              {
                "id": 9,
                "description": "Team member",
                "parentId": 8,
                "children": []
              },
              {
                "id": 10,
                "description": "Scrum master",
                "parentId": 8,
                "children": []
              },
              {
                "id": 11,
                "description": "Product owner",
                "parentId": 8,
                "children": []
              },
            ]
          },
          {
            "id": 12,
            "description": "Events",
            "parentId": 7,
            "children": [
              {
                "id": 13,
                "description": "Sprint planning",
                "parentId": 12,
                "children": []
              },
              {
                "id": 14,
                "description": "Daily Scrum",
                "parentId": 12,
                "children": []
              },
              {
                "id": 15,
                "description": "Sprint review",
                "parentId": 12,
                "children": []
              },
              {
                "id": 16,
                "description": "Retrospective",
                "parentId": 12,
                "children": []
              },
            ]
          },
          {
            "id": 17,
            "description": "Artifacts",
            "parentId": 7,
            "children": [
              {
                "id": 18,
                "description": "Release plan",
                "parentId": 17,
                "children": []
              },
              {
                "id": 19,
                "description": "Product backlog",
                "parentId": 17,
                "children": []
              },
              {
                "id": 20,
                "description": "Sprint backlog",
                "parentId": 17,
                "children": []
              },
              {
                "id": 21,
                "description": "Burndown",
                "parentId": 17,
                "children": []
              },
            ]
          }
        ]
      }
    ]} />
  </div>
)

export default App