import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
export default class ValentineProposal extends LightningElement {
    opened = false;
    sheSaidYes = false;
    name = 'Ruchi';
    
    openEnvelope() {
        this.opened = true;
    }
     @wire(CurrentPageReference)
    getPageReference(pageRef) {
        if (pageRef && pageRef.state && pageRef.state.name) {
            this.name = decodeURIComponent(pageRef.state.name);
        }
    }
    handleYes() {
        this.sheSaidYes = true;
    }
}
