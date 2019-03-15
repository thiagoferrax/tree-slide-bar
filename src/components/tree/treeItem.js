import React, { Component } from 'react'
import './treeItem.css'
import If from '../operator/if'
import SlideBar from './slideBar'

export default class TreeItem extends Component {
    constructor(props) {
        super(props)
        this.state = { hideChildren: false }
    }

    componentWillMount() {
        this.setState({ ...this.state, node: this.props.node, hideChildren: this.props.shrink })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.node != nextProps.node) {
            this.setState({ ...this.state, node: nextProps.node })
        }
    }

    toggleIcon(node) {
        this.setState({ ...this.state, hideChildren: !this.state.hideChildren })
    }

    render() {
        return (
            <div key={`item_${this.state.node.id}`} className="node">
                <div className={this.props.children ? 'parent' : ''}>
                    <div className="treeItem">
                        <If test={this.props.children}>
                            <div className="treeItemDescription">
                                <a onClick={() => this.toggleIcon(this.state.node)}>
                                    <i className={`${this.state.hideChildren ? 'icon ion-md-arrow-dropright' : 'icon ion-md-arrow-dropdown'}`} />
                                </a>
                                <div>
                                    <a onClick={() => this.toggleIcon(this.state.node)}>{this.state.node.description}</a>
                                </div>
                            </div>
                        </If>
                        <If test={!this.props.children}>
                            <div className="treeItemDescription">{this.state.node.description}</div>
                        </If>
                        <div className="controls">
                            <SlideBar node={this.state.node} onChange={this.props.onChange} hideSlideBar={this.props.hideSlideBar} />
                            <If test={this.props.onEdit || this.props.onDelete}>
                                <div className='mr-3'>
                                    <If test={this.props.onEdit} >
                                        <button className='btn btn-default' onClick={e => { e.preventDefault(); this.props.onEdit(this.state.node) }} small='true'>
                                            <i className='icon ion-md-create'></i>
                                        </button>
                                    </If>
                                    <If test={this.props.onDelete} >
                                        <button className='btn btn-danger' onClick={e => { e.preventDefault(); this.props.onDelete(this.state.node) }} small='true'>
                                            <i className='icon ion-md-trash'></i>
                                        </button>
                                    </If>
                                </div>
                            </If>
                        </div>
                    </div>
                </div>
                <If test={this.props.children && !this.state.hideChildren}>
                    <div className='children'>
                        {this.props.children}
                    </div>
                </If>
            </div >
        )
    }
}
