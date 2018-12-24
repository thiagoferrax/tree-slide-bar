const expect = require('chai').expect
const { getInitialValuesMap } = require('./treeUtil')

describe('TreeUtil', function () {
    it('Get inital values map from a tree!', function () {

        const tree = [
            {
                id: 1,
                description: "Code Review Checklist",
                parentId: null,
                value: 7,
                children: [
                    {
                        id: 2,
                        description: "Easily understandable?",
                        parentId: 1,
                        value: 5,
                        children: []
                    },
                    {
                        id: 3,
                        description: "Follows the coding standards/guidelines?",
                        parentId: 1,
                        value: 7,
                        children: []
                    },
                    {
                        id: 4,
                        description: "Code has no duplicated parts?",
                        parentId: 1,
                        value: 8,
                        children: []
                    },
                    {
                        id: 5,
                        description: "Can I unit easily test and debug the code?",
                        parentId: 1,
                        value: 9,
                        children: []
                    },
                    {
                        id: 6,
                        description: "Function or class is not so big?",
                        parentId: 1,
                        value: 4,
                        children: []
                    }
                ]
            }
        ]

        const expectedMap = {
            '1': {value: 7, parentId: null},
            '2': {value: 5, parentId: 1},
            '3': {value: 7, parentId: 1},
            '4': {value: 8, parentId: 1},
            '5': {value: 9, parentId: 1},
            '6': {value: 4, parentId: 1},
        }

        const initialValuesMap = getInitialValuesMap(tree)

        expect(expectedMap).to.deep.equal(initialValuesMap)
    })
})
