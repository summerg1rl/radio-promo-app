import * as React from 'react';
import { ModalEventHandler } from 'bootstrap';
import { Util } from '../../../../common/util/util';

export interface ModalProps {
    children: React.ReactNode;
    contentKey: string;
    handleClose: (e: ModalEventHandler<HTMLDivElement>) => void;
}

export interface ModalState {
}

export class Modal extends React.Component<ModalProps, ModalState> {
    private el: HTMLElement;
    private $el: JQuery<HTMLDivElement>;
    
    constructor(props: ModalProps) {
        super(props);
    }


    componentDidMount() {
        this.$el = $(this.el) as JQuery<HTMLDivElement>;
        this.$el.modal({});
        this.$el.on("hidden.bs.modal", (e) => this.props.handleClose(e));
    }

    componentWillUnmount() {
        this.$el.modal("dispose");
    }

    componentDidUpdate(prevProps: any) {
        console.log("modal", prevProps, this.props);
        if (prevProps.contentKey != this.props.contentKey) {
            if (this.props == null || Util.isEmpty(this.props.contentKey)) {
                this.$el.modal("hide");
            } else if (this.props != null && !Util.isEmpty(this.props.contentKey)) {
                this.$el.modal("show");
            }
        }
    }

    render() {
        return (
            <div className="modal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};