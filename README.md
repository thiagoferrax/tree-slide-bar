# tree-slide-bar

> 

[![NPM](https://img.shields.io/npm/v/tree-slide-bar.svg)](https://www.npmjs.com/package/tree-slide-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![mychecklist_2](https://user-images.githubusercontent.com/43149895/52335145-68d95f00-29e0-11e9-92c8-c537b1ef07ea.png)

## Install

```bash
npm install --save tree-slide-bar
```

## Usage

```jsx
import React, { Component } from 'react'

import TreeSlideBar from 'tree-slide-bar'

class Example extends Component {
  render () {
    return (
      <TreeSlideBar cols='12' name='checklist' legend='Code Review Checklist' 
      tree={[
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
      ]}/>
    )
  }
}
```

## License

MIT © [thiagoferrax](https://github.com/thiagoferrax)
