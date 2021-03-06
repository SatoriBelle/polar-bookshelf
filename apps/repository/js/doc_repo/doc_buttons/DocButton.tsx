import * as React from 'react';
import {NULL_FUNCTION} from '../../../../../web/js/util/Functions';

export class DocButton extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);

        this.state = {
        };

    }

    public render() {

        return (<div className="mt-auto mb-auto ml-1 mr-1"
                     onClick={this.props.onClick || NULL_FUNCTION}>

            {this.props.children}

        </div>);

    }

}

interface IProps {
    readonly onClick?: () => void;
}

interface IState {
}
