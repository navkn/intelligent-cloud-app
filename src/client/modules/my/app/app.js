import { LightningElement,wire } from 'lwc';
import  getAccountRecords from 'data/sfWire';
export default class App extends LightningElement {
    // eslint-disable-next-line @lwc/lwc/no-unknown-wire-adapters
    @wire(getAccountRecords) getRecords({data,error}){
        console.log('Hi');
        if(data) console.log('data',data)
        if(error) console.log('error',error)
    }
}
