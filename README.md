# tree-slide-bar

> 

[![NPM](https://img.shields.io/npm/v/tree-slide-bar.svg)](https://www.npmjs.com/package/tree-slide-bar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>

![treeslidebar](https://user-images.githubusercontent.com/43149895/52708168-4909e400-2f68-11e9-9625-eedc67e5dd0e.gif)

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
      <TreeSlideBar cols='12' name='checklist' tree={[
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
